<?php
/**
 * MG Block Slider
 *
 * @package   mg-block-slider
 * @link      https://wordpress.org/plugins/mg-block-slider
 * @author    Marcos Gigena
 * @copyright 2022 @ Marcos Gigena
 * @license   GPL v2 or later
 *
 * Plugin Name: MG Block Slider
 * Plugin URI: https://wordpress.org/plugins/mg-block-slider
 * Author: Marcos Gigena
 * Author URI: https://github.com/gigenam
 * Description: A simple slideshow block to use it in any block editor with any type of content. Post, pages, widgets. Anything and anywhere where you want.
 * Version: 1.1.3
 * Requires at least: 5.9
 * Tested up to: 6.1
 * Requires PHP: 7.0
 * Text Domain: mg-block-slider
 * Domain Path: /languages
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * MG Block Slider. If not, see <https://www.gnu.org/licenses/old-licenses/gpl-2.0.html>.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MGSLIDER_DIR', plugin_dir_url( __FILE__ ) );

$mgblockslider_plugin_version  = get_file_data( __FILE__, array( 'Version' => 'Version' ), false );
$mgblockslider_enqueue_version = ( 'development' === wp_get_environment_type() || WP_DEBUG ) ? microtime() : $mgblockslider_plugin_version;
$mgblockslider_enqueue_suffix  = ( 'development' === wp_get_environment_type() || WP_DEBUG ) ? null : '.min';

if ( ! class_exists( 'MGBlockSlider' ) ) {
	/**
	 * Main MG Block Slider class
	 */
	class MGBlockSlider {
		/**
		 * Check if is any slider publish
		 *
		 * @var $block_publish
		 */
		private static $block_publish = false;

		/**
		 * Slider options
		 *
		 * @var $render_slider
		 */
		private static $render_slider;

		/**
		 * Init class
		 */
		public static function init() {
			add_action( 'init', array( __CLASS__, 'block' ) );
			add_action( 'wp_enqueue_scripts', array( __CLASS__, 'scripts' ) );

			// Register activation hook.
			register_activation_hook( __FILE__, array( __CLASS__, 'admin_activation_notice' ) );

			// Admin notices and links.
			add_action( 'admin_notices', array( __CLASS__, 'admin_notice' ) );
			add_filter( 'plugin_row_meta', array( __CLASS__, 'plugin_meta' ), 10, 2 );
		}

		/**
		 * Runs only when the plugin is activated
		 */
		public static function admin_activation_notice() {
			set_transient( 'mgblockslider_admin_notice', true, 5 );
		}

		/**
		 * Admin Notice on Activation
		 */
		public static function admin_notice() {
			if ( get_transient( 'mgblockslider_admin_notice' ) ) {
				?>
				<div class="updated notice is-dismissible">
					<p><?php esc_html_e( 'Hello. This plugin does not add any page or menu in your admin. Just use it as a block in your content or as a widget. If you want some help, you can find it in the', 'mg-block-slider' ); ?> <a href="https://github.com/gigenam/mgblockslider/wiki" target="_blank">Wiki</a>.</p>
					<p><?php esc_html_e( 'And if you find this plugin useful, please spread the word and/or leave a review. Enjoy simplicity!', 'mg-block-slider' ); ?></p>
				</div>
				<?php
				// Only display this notice once.
				delete_transient( 'mgblockslider_admin_notice' );
			}
		}

		/**
		 * Register block slider
		 */
		public static function block() {
			// Register block.
			register_block_type( __DIR__ . '/blocks/', array( 'render_callback' => array( __CLASS__, 'callback' ) ) );
			register_block_type( __DIR__ . '/blocks/slides/', array( 'render_callback' => array( __CLASS__, 'slides_callback' ) ) );

			// Load translations.
			load_plugin_textdomain( 'mg-block-slider', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
			// Load JSON files for JS - this is necessary if using a custom languages path.
			$script_handle = generate_block_asset_handle( 'mg-block-slider/slider', 'editorScript' );
			wp_set_script_translations( $script_handle, 'mg-block-slider', plugin_dir_path( __FILE__ ) . 'languages/' );
		}

		/**
		 * Enqueue slider styles and scripts
		 */
		public static function scripts() {
			self::publish_block( 'post' );
			self::publish_block( 'widget' );

			if ( self::$block_publish ) {
				wp_enqueue_style( 'mg-block-slider-main', MGSLIDER_DIR . "css/slider{$GLOBALS['mgblockslider_enqueue_suffix']}.css", null, $GLOBALS['mgblockslider_enqueue_version'], 'all' );
				wp_enqueue_script( 'mg-block-slider-main', MGSLIDER_DIR . "js/slider{$GLOBALS['mgblockslider_enqueue_suffix']}.js", null, $GLOBALS['mgblockslider_enqueue_version'], true );
				wp_localize_script(
					'mg-block-slider-main',
					'mgblocksliderI18n',
					array(
						'slide'         => __( 'Slide', 'mg-block-slider' ),
						'showSlide'     => __( 'Show slide', 'mg-block-slider' ),
						'prev'          => __( 'Previous', 'mg-block-slider' ),
						'prevSlide'     => __( 'Previous slide', 'mg-block-slider' ),
						'showPrevSlide' => __( 'Show previous slide', 'mg-block-slider' ),
						'next'          => __( 'Next', 'mg-block-slider' ),
						'nextSlide'     => __( 'Next slide', 'mg-block-slider' ),
						'showNextSlide' => __( 'Show next slide', 'mg-block-slider' ),
						'loading'       => __( 'Loading', 'mg-block-slider' ),
						'closeLightbox' => __( 'Close lightbox', 'mg-block-slider' ),
						'openLightbox'  => __( 'Open lightbox', 'mg-block-slider' ),
					)
				);
				add_action( 'wp_footer', array( __CLASS__, 'esc_script' ), 999 );
			}
		}

		/**
		 * Scape the dynamic scripts for extra safety when is used in the footer
		 */
		public static function esc_script() {
			$scaped_script = str_replace( array( "\'", '\n' ), array( "'", '' ), esc_js( self::$render_slider ) );
			echo "<script id='mg-block-slider-main-js-options' type='text/javascript'>{$scaped_script}</script>"; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		/**
		 * Render main slider callback
		 *
		 * @param array  $block_attributes All the attributes from block.json.
		 * @param string $content          All the content added in the editor.
		 * @return html Dynamic block
		 */
		public static function callback( $block_attributes, $content ) {
			if ( ! empty( $content ) && ! is_admin() ) {
				$wrapper_attributes = get_block_wrapper_attributes();
				$default_configs    = array();

				foreach ( $block_attributes as $key => $attr ) {
					if ( 'boolean' === gettype( $attr ) ) {
						$default_configs[ $key ] = ( $attr ) ? 'true' : 'false';
					} else {
						$default_configs[ $key ] = $attr;
					}

					if ( ! empty( $block_attributes['customTransition'] ) && 'custom' === $block_attributes['transition'] ) {
						$default_configs['transition'] = $block_attributes['customTransition'];
					}
				}

				$slider_id          = strtolower( ! empty( $default_configs['customId'] ) ? str_replace( ' ', '-', $default_configs['customId'] ) : $default_configs['id'] );
				$slider_id_formated = str_replace( '-', '_', $slider_id );
				$init_slider        = "var {$slider_id_formated} = new MGBlockSlider({
					selector        : '.wp-block-mg-block-slider-slider#{$slider_id}',
					theme           : '{$default_configs['theme']}',
					directionNav    : {$default_configs['directionNav']},
					hideDirections  : {$default_configs['hideDirections']},
					controlNav      : {$default_configs['controlNav']},
					hideControls    : {$default_configs['hideControls']},
					thumbsNav       : {$default_configs['thumbsNav']},
					hideThumbs      : {$default_configs['hideThumbs']},
					autoStart       : {$default_configs['autoStart']},
					stopOnHover     : {$default_configs['stopOnHover']},
					pauseUnfocused  : {$default_configs['pauseUnfocused']},
					waitVideo       : {$default_configs['waitVideo']},
					swipeNav        : {$default_configs['swipeNav']},
					animation       : '{$default_configs['animation']}',
					vertical        : {$default_configs['vertical']},
					transition      : '{$default_configs['transition']}',
					duration        : {$default_configs['duration']},
					speed           : {$default_configs['speed']},
					arrowType       : '{$default_configs['arrowType']}',
					paginationType  : '{$default_configs['paginationType']}',
					autoHeight      : {$default_configs['autoHeight']},
					lightbox        : {$default_configs['lightbox']},
					lightboxCounter : {$default_configs['lightboxCounter']},
					lightboxArrows  : {$default_configs['lightboxArrows']}
				});";
				// Compress output.
				self::$render_slider .= preg_replace( '/\s+/', ' ', $init_slider );

				return "
					<div id='{$slider_id}' {$wrapper_attributes}>
						<div class='wp-block-mg-block-slider-slider__container'>
							<ul class='wp-block-mg-block-slider-slides__container'>
								{$content}
							</ul>
						</div>
					</div>
				";
			}
		}

		/**
		 * Render child slides callback
		 *
		 * @param array  $block_attributes All the attributes from block.json.
		 * @param string $content          All the content added in the editor.
		 * @return html Dynamic block
		 */
		public static function slides_callback( $block_attributes, $content ) {
			if ( ! empty( $content ) && ! is_admin() ) {
				$wrapper_attributes = get_block_wrapper_attributes();
				return "<li {$wrapper_attributes}>{$content}</li>";
			}
		}

		/**
		 * Check if the slider is publish as post or widget block
		 *
		 * @param string $type The type of section ( post | widget ).
		 * @return bool
		 */
		private static function publish_block( string $type ) {
			if ( 'post' === $type ) {
				global $post;
				$blocks = parse_blocks( $post->post_content );
			} elseif ( 'widget' === $type ) {
				$blocks = get_option( 'widget_block' );
			}

			if ( isset( $blocks ) ) {
				foreach ( $blocks as $key => $block ) {
					if ( 'post' === $type && 'mg-block-slider/slider' === $block['blockName'] ) {
						self::$block_publish = true;
					}

					if ( 'widget' === $type && ( ! empty( $block['content'] ) && has_block( 'mg-block-slider/slider', $block['content'] ) ) ) {
						self::$block_publish = true;
					}
				}
			}
			return (bool) self::$block_publish;
		}

		/**
		 * Additional information on plugins page
		 *
		 * @param array  $links List of plugin links.
		 * @param string $file  Namespace and name of the plugin php file.
		 * @return array
		 */
		public static function plugin_meta( $links, $file ) {
			if ( plugin_basename( __FILE__ ) === $file ) {
				$row_meta = array(
					'docs'    => '<a href="' . esc_url( 'https://github.com/gigenam/mgblockslider/wiki' ) . '" target="_blank" aria-label="' . esc_attr__( 'Documentation', 'mg-block-slider' ) . '">' . esc_html__( 'How to use', 'mg-block-slider' ) . '</a>',
					'support' => '<a style="display:inline-flex; align-items:center" href="https://www.paypal.com/donate/?hosted_button_id=X73V9XW8Y94C8" target="_blank" aria-label="' . esc_attr__( 'Support the development', 'mg-block-slider' ) . '">' . esc_html__( 'Support', 'mg-block-slider' ) . '<svg style="padding:3px 0 0 3px" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16"><path style="fill:#273469;stroke-width:1.67522" d="m 0.0353037,14.089603 c -0.079383,-0.167225 -8.62e-5,-0.665325 -8.62e-5,-0.665325 L 1.9006824,1.3581909 c 0,0 0.080962,-0.73203612 0.2839813,-1.08361 C 2.3876845,-0.076993 3.1692046,0.00937416 3.1692046,0.00937416 h 5.4025412 c 1.221041,0 3.6197922,0.83895272 3.6645662,2.88749224 0.04478,2.0485396 -0.606089,4.0804014 -1.965018,4.9022296 -1.3589292,0.8218282 -2.2524662,1.0979052 -3.9088485,1.0973096 -1.6563805,0 -1.9118323,-0.1250839 -1.9952659,0.2835224 -0.083434,0.4087552 -0.9031384,5.033269 -0.9031384,5.033269 H 0.3956886 c 0,0 -0.2809985,0.04467 -0.3603849,-0.123594 z" /><path style="fill:#2690c2;stroke-width:1.67522" d="M 3.2302811,15.89006 C 3.1625421,15.747108 3.230208,15.32227 3.230208,15.32227 L 4.879377,4.7107256 c 0,0 0.069093,-0.6246728 0.2423417,-0.9247242 C 5.2949668,3.4859499 5.9618851,3.5596598 5.9618851,3.5596598 h 4.5673719 c 1.041989,0 3.008974,1.1184547 3.044996,2.7665784 0.03602,1.6481235 -0.776592,3.528992 -1.826048,4.2632618 -1.049458,0.734269 -1.68226,0.892857 -2.7374122,0.887348 -1.0551517,0 -1.4784029,-0.05659 -1.5500057,0.392821 -0.051121,0.321048 -0.4081324,2.255374 -0.6099546,3.372191 -0.047189,0.261186 -0.075541,0.491101 -0.2152895,0.607846 -0.1397506,0.116143 -0.2362336,0.145928 -0.4724269,0.145928 H 3.5378212 c 0,0 -0.239794,0.03722 -0.3075401,-0.105723 z" /><path style="fill:#1f2650;stroke-width:1.67522" d="m 5.7417947,3.5522145 c -0.2106137,0 -0.5118147,0.046162 -0.6200952,0.2337869 C 4.9484484,4.0860528 4.879392,4.7107256 4.879392,4.7107256 4.2435137,8.7915738 4.2680122,8.6481744 4.1867735,9.1459769 4.3159519,8.8213556 4.706132,8.8965546 6.3625125,8.8965546 c 1.6563823,0 2.7470593,-0.3217922 3.9086855,-1.0974586 C 11.432823,7.0234296 11.969699,5.6796757 12.167922,4.1398089 11.602533,3.7694725 10.979778,3.5596598 10.529389,3.5596598 H 5.9619893 c 0,0 -0.093828,-0.014893 -0.2201946,-0.014893 z" /></svg></a>',
				);
				return array_merge( $links, $row_meta );
			}
			return (array) $links;
		}
	}
}
MGBlockSlider::init();
