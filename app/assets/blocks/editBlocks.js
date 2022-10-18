import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ }                         from '@wordpress/i18n';
import { useSelect }                  from '@wordpress/data';
import { TextControl }                from '@wordpress/components';
import blockInfo                      from './block.json';
import { controlsSlider }             from './controls.js';

/**
 * Main Slider
 *
 * @param { Object } props Properties of the block
 */
export const EditSlider = ( props ) => {
	const { attributes, setAttributes } = props;
	const blockProps                    = useBlockProps();
	attributes.id                       = blockProps.id;

	function compactSlider( e ) {
		e.target.classList.toggle( 'is-collapse' );
		e.target.parentElement.querySelector( '.block-editor-inner-blocks > .block-editor-block-list__layout' ).classList.toggle( 'is-collapse-full' );

		// Save state.
		if ( 'is-collapse' === e.target.classList[ 2 ] ) {
			localStorage.setItem( 'mgblockslider_collapse_full', true );
		} else {
			localStorage.removeItem( 'mgblockslider_collapse_full' );
		}
	}

	function collapseSlides( e ) {
		e.target.classList.toggle( 'is-collapse' );
		e.target.nextElementSibling.classList.toggle( 'is-collapse' );
		e.target.parentElement.querySelectorAll( '.wp-block-mgblockslider-slide__title' ).forEach( ( title ) => title.classList.toggle( 'is-collapse' ) );

		// Save state.
		if ( 'is-collapse' === e.target.classList[ 2 ] ) {
			localStorage.setItem( 'mgblockslider_collapse_slides', true );
		} else {
			localStorage.removeItem( 'mgblockslider_collapse_slides' );
		}
	}

	// Remember collapsed options.
	setTimeout( () => {
		document.querySelectorAll( '.wp-block-mgblockslider-slider' ).forEach( ( slider ) => {
			// Collapse full.
			if ( localStorage.getItem( 'mgblockslider_collapse_full' ) ) {
				slider.querySelector( '.wp-block-mgblockslider-slider__toggle--full' ).setAttribute( 'title', __( 'Expand block', 'mgblockslider' ) );
				slider.querySelector( '.wp-block-mgblockslider-slider__toggle--full' ).classList.add( 'is-collapse' );
				slider.querySelector( '.block-editor-inner-blocks > .block-editor-block-list__layout' ).classList.add( 'is-collapse-full' );
			} else {
				slider.querySelector( '.wp-block-mgblockslider-slider__toggle--full' ).setAttribute( 'title', __( 'Collapse block', 'mgblockslider' ) );
			}

			// Compact mode.
			if ( localStorage.getItem( 'mgblockslider_collapse_slides' ) ) {
				slider.querySelector( '.wp-block-mgblockslider-slider__toggle--compact' ).setAttribute( 'title', __( 'Expand slides', 'mgblockslider' ) );
				slider.querySelectorAll( '.block-editor-inner-blocks, .wp-block-mgblockslider-slider__toggle--compact, .wp-block-mgblockslider-slide__title' ).forEach( ( els ) => els.classList.add( 'is-collapse' ) );
			} else {
				slider.querySelector( '.wp-block-mgblockslider-slider__toggle--compact' ).setAttribute( 'title', __( 'Collapse slides', 'mgblockslider' ) );
			}
		} );
	}, 150 );

	// Dark theme.
	function changeColor( attrs ) {
		if ( 'dark' === attributes.theme ) {
			attrs.style = {
				color: '#ffffff',
				backgroundColor: '#555555',
			};
		}
	}

	return (
		<>
			{ controlsSlider( props ) }
			{ changeColor( blockProps ) }
			<div { ...blockProps }>
				<span onClick={ ( e ) => compactSlider( e ) } className="wp-block-mgblockslider-slider__toggle wp-block-mgblockslider-slider__toggle--full" title={ __( 'Collapse', 'mgblockslider' ) }>
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path></svg>
				</span>
				<p className="wp-block-mgblockslider-slider__title">
					<TextControl
						label={__( 'MG Block Slider', 'mgblockslider' )}
						hideLabelFromVision={true}
						className="wp-block-mgblockslider-slider__title__input"
						value={ ( '' === attributes.customId ) ? blockInfo.title : attributes.customId }
						onChange={ ( val ) => setAttributes( { customId: val } ) }
					/>
				</p>
				<span onClick={ ( e ) => collapseSlides( e ) } className="wp-block-mgblockslider-slider__toggle wp-block-mgblockslider-slider__toggle--compact" title={ __( 'Collapse', 'mgblockslider' ) }>
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path></svg>
				</span>
				<InnerBlocks allowedBlocks={ [ 'mgblockslider/slides' ] } />
			</div>
		</>
	);
};

/**
 * Inner slides
 *
 * @param { Object } props Properties of the block
 */
export const EditSlides = ( props ) => {
	const { clientId }   = props;
	const blockProps     = useBlockProps();
	const blockCount     = useSelect( ( select ) => select( 'core/block-editor' ).getBlockIndex( clientId ) + 1 );
	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/buttons',
		'core/html',
		'core/blockquote',
		'core/pullquote',
		'core/image',
		'core/video',
		'core/columns',
		'core/cover',
		'core/media-text',
		'core/embed',
		'core/group',
	];

	return (
		<>
			<div { ...blockProps }>
				<p className="wp-block-mgblockslider-slide__title">{ __( 'Slide ', 'mgblockslider' ) + blockCount }</p>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
			</div>
		</>
	);
};

