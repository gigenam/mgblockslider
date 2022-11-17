import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InspectorAdvancedControls } from '@wordpress/block-editor';

export const controlsSlider = ( props ) => {
	const { attributes, setAttributes } = props;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__( 'Help', 'mg-block-slider' )} initialOpen={false} className="components-panel__body__mg-block-slider" icon="editor-help">
					<PanelRow>
						<p>{ __( 'Check out how to configure and customize at the', 'mg-block-slider' ) } <a href={ __( 'https://github.com/gigenam/mgblockslider/wiki', 'mg-block-slider' ) } target="_blank">{ __( 'GitHub Wiki', 'mg-block-slider' ) }</a>.</p>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Navigations', 'mg-block-slider' )} initialOpen={true} className="components-panel__body__mg-block-slider">
					<PanelRow>
						<ToggleControl
							label={__( 'Navigation arrows', 'mg-block-slider' )}
							checked={ attributes.directionNav }
							onChange={ ( val ) => {
								setAttributes( {
									directionNav: val,
									showArrowsOptions: val,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow className={attributes.showArrowsOptions ? '' : 'hidden'}>
						<ToggleControl
							label={__( 'Auto hide arrows', 'mg-block-slider' )}
							checked={ attributes.hideDirections }
							onChange={ ( val ) => setAttributes( { hideDirections: val } ) }
						/>
					</PanelRow>
					<PanelRow className={attributes.showArrowsOptions ? '' : 'hidden'}>
						<SelectControl
							label={__( 'Arrows type', 'mg-block-slider' )}
							value={ attributes.arrowType }
							options={ [
								{ label: __( 'Default', 'mg-block-slider' ), value: '' },
								{ label: __( 'Squares', 'mg-block-slider' ), value: 'squares' },
								{ label: __( 'Circles', 'mg-block-slider' ), value: 'circles' },
							] }
							onChange={ ( val ) => setAttributes( { arrowType: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Pagination dots', 'mg-block-slider' )}
							checked={ attributes.controlNav }
							onChange={ ( val ) => {
								setAttributes( {
									controlNav: val,
									showControlOptions: val,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow className={attributes.showControlOptions ? '' : 'hidden'}>
						<ToggleControl
							label={__( 'Auto hide dots', 'mg-block-slider' )}
							checked={ attributes.hideControls }
							onChange={ ( val ) => setAttributes( { hideControls: val } ) }
						/>
					</PanelRow>
					<PanelRow className={attributes.showControlOptions ? '' : 'hidden'}>
						<SelectControl
							label={__( 'Paginations type', 'mg-block-slider' )}
							value={ attributes.paginationType }
							options={ [
								{ label: __( 'Circles', 'mg-block-slider' ), value: '' },
								{ label: __( 'Squares', 'mg-block-slider' ), value: 'squares' },
								{ label: __( 'Circles with background', 'mg-block-slider' ), value: 'block' },
								{ label: __( 'Squares with background', 'mg-block-slider' ), value: 'squares-block' },
							] }
							onChange={ ( val ) => setAttributes( { paginationType: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Thumbnails navigation', 'mg-block-slider' )}
							checked={ attributes.thumbsNav }
							onChange={ ( val ) => {
								setAttributes( {
									thumbsNav: val,
									showThumbOptions: val,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow className={attributes.showThumbOptions ? '' : 'hidden'}>
						<ToggleControl
							label={__( 'Auto hide thumbs', 'mg-block-slider' )}
							checked={ attributes.hideThumbs }
							onChange={ ( val ) => setAttributes( { hideThumbs: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Swipe navigation', 'mg-block-slider' )}
							checked={ attributes.swipeNav }
							onChange={ ( val ) => setAttributes( { swipeNav: val } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Animations', 'mg-block-slider' )} initialOpen={false} className="components-panel__body__mg-block-slider">
					<PanelRow>
						<ToggleControl
							label={__( 'Auto start animations', 'mg-block-slider' )}
							checked={ attributes.autoStart }
							onChange={ ( val ) => setAttributes( { autoStart: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Stop animations on hover', 'mg-block-slider' )}
							checked={ attributes.stopOnHover }
							onChange={ ( val ) => setAttributes( { stopOnHover: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={__( 'Animation type', 'mg-block-slider' )}
							value={ attributes.animation }
							options={ [
								{ label: __( 'Swipe', 'mg-block-slider' ),        value: 'slide' },
								{ label: __( 'Fade', 'mg-block-slider' ),         value: 'fade' },
								{ label: __( 'Cards', 'mg-block-slider' ),        value: 'cards' },
								{ label: __( 'No animation', 'mg-block-slider' ), value: 'none' },
							] }
							onChange={ ( val ) => setAttributes( { animation: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Vertical animations', 'mg-block-slider' )}
							checked={ attributes.vertical }
							onChange={ ( val ) => setAttributes( { vertical: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={__( 'Transition type', 'mg-block-slider' )}
							value={ attributes.transition }
							options={ [
								{ label: 'Linear',      value: 'linear' },
								{ label: 'Ease',        value: 'ease' },
								{ label: 'Ease-in',     value: 'ease-in' },
								{ label: 'Ease-out',    value: 'ease-out' },
								{ label: 'Ease-in-out', value: 'ease-in-out' },
								{ label: 'Custom',      value: 'custom' },
							] }
							onChange={ ( val ) => {
								setAttributes( {
									transition: val,
									showCustomTransition: ( 'custom' === val ) ? true : false,
								} );
							} }
						/>
						<TextControl className={attributes.showCustomTransition ? 'components-base-control--custom' : 'hidden'}
							value={ attributes.customTransition }
							onChange={ ( val ) => setAttributes( { customTransition: val } ) }
							help={ __( 'Add custom css transitions with steps() or cubic-bezier().', 'mg-block-slider' ) }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__( 'Duration between slides', 'mg-block-slider' )}
							value={ attributes.duration }
							onChange={ ( val ) => {
								setAttributes( { duration: val } );
								if ( val <= attributes.speed ) {
									setAttributes( { speed: val - 0.2 } );
								}
							} }
							min={ 0.5 }
							max={ 10.0 }
							step={ 0.1 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__( 'Animation speed', 'mg-block-slider' )}
							value={ attributes.speed }
							onChange={ ( val ) => {
								setAttributes( { speed: val } );
								if ( val >= attributes.duration ) {
									setAttributes( { speed: attributes.duration - 0.2 } );
								}
							} }
							min={ 0.1 }
							max={ 9.5 }
							step={ 0.1 }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Media', 'mg-block-slider' )} initialOpen={false} className="components-panel__body__mg-block-slider">
					<PanelRow>
						<ToggleControl
							label={__( 'Pause content when losing focus', 'mg-block-slider' )}
							checked={ attributes.pauseUnfocused }
							onChange={ ( val ) => setAttributes( { pauseUnfocused: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Wait videos to finish', 'mg-block-slider' )}
							checked={ attributes.waitVideo }
							onChange={ ( val ) => setAttributes( { waitVideo: val } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Theme', 'mg-block-slider' )} initialOpen={false} className="components-panel__body__mg-block-slider">
					<PanelRow>
						<SelectControl
							value={ attributes.theme }
							options={ [
								{ label: __( 'Light', 'mg-block-slider' ), value: 'light' },
								{ label: __( 'Dark', 'mg-block-slider' ),  value: 'dark' },
							] }
							onChange={ ( val ) => setAttributes( { theme: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Auto minimum height', 'mg-block-slider' )}
							checked={ attributes.autoHeight }
							onChange={ ( val ) => setAttributes( { autoHeight: val } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Lightbox (Beta)', 'mg-block-slider' )} initialOpen={false} className="components-panel__body__mg-block-slider" icon="warning">
					<PanelRow>
						<p>{__( 'These features are in beta and need more testing with different blocks and user customizations. Be careful and let me know of any problem you experience.', 'mg-block-slider' )}</p>
					</PanelRow>
					{/* TODO: Remove beta-testing classes when this is stable and well tested. */}
					<PanelRow className='beta-testing'>
						<ToggleControl
							label={__( 'Open content on a lightbox', 'mg-block-slider' )}
							checked={ attributes.lightbox }
							onChange={ ( val ) => setAttributes( { lightbox: val } ) }
						/>
					</PanelRow>
					<PanelRow className={attributes.lightbox ? '' : 'hidden'}>
						<SelectControl
							label={__( 'How to open the lightbox', 'mg-block-slider' )}
							value={ attributes.lightboxOpens }
							options={ [
								{ label: __( 'Click on slides', 'mg-block-slider' ), value: 'slide' },
								{ label: __( 'Add a button', 'mg-block-slider' ),    value: 'button' },
							] }
							onChange={ ( val ) => setAttributes( { lightboxOpens: val } ) }
						/>
					</PanelRow>
					<PanelRow className={attributes.lightbox ? 'beta-testing' : 'hidden'}>
						<ToggleControl
							label={__( 'Navigation arrows', 'mg-block-slider' )}
							checked={ attributes.lightboxArrows }
							onChange={ ( val ) => {
								setAttributes( { lightboxArrows: val } );
								if ( ! val ) {
									setAttributes( { lightboxCounter: false } );
								}
							} }
						/>
					</PanelRow>
					<PanelRow className={attributes.lightbox && attributes.lightboxArrows ? 'beta-testing' : 'hidden'}>
						<ToggleControl
							label={__( 'Show slides counter', 'mg-block-slider' )}
							checked={ attributes.lightboxCounter }
							onChange={ ( val ) => setAttributes( { lightboxCounter: val } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<InspectorAdvancedControls key="inspector">
				<PanelRow>
					<Button
						className="component-button--restore"
						onClick={ () => setAttributes( {
							theme: 'light',
							directionNav: true,
							showArrowsOptions: true,
							hideDirections: true,
							controlNav: false,
							showControlOptions: false,
							hideControls: false,
							thumbsNav: false,
							showThumbOptions: false,
							hideThumbs: false,
							autoStart: true,
							stopOnHover: true,
							pauseUnfocused: true,
							waitVideo: false,
							swipeNav: true,
							animation: 'slide',
							vertical: false,
							transition: 'ease',
							showCustomTransition: false,
							customTransition: '',
							duration: 5.0,
							speed: 0.5,
							arrowType: '',
							paginationType: '',
							autoHeight: true,
							lightbox: false,
							lightboxOpens: 'slide',
							lightboxCounter: false,
							lightboxArrows: false,
						} ) }
						variant="secondary">
						{__( 'Restore everything to default', 'mg-block-slider' )}
					</Button>
				</PanelRow>
			</InspectorAdvancedControls>
		</>
	);
};

