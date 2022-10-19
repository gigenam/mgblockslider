import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InspectorAdvancedControls } from '@wordpress/block-editor';

export const controlsSlider = ( props ) => {
	const { attributes, setAttributes } = props;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__( 'Help', 'mgblockslider' )} initialOpen={false} className="components-panel__body__mgblockslider" icon="editor-help">
					<PanelRow>
						<p>{ __( 'Check out how to configure and customize at the', 'mgblockslider' ) } <a href={ __( 'https://github.com/gigenam/mgblockslider/wiki', 'mgblockslider' ) } target="_blank">{ __( 'GitHub Wiki', 'mgblockslider' ) }</a>.</p>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Navigations', 'mgblockslider' )} initialOpen={true} className="components-panel__body__mgblockslider">
					<PanelRow>
						<ToggleControl
							label={__( 'Navigation arrows', 'mgblockslider' )}
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
							label={__( 'Auto hide arrows', 'mgblockslider' )}
							checked={ attributes.hideDirections }
							onChange={ ( val ) => setAttributes( { hideDirections: val } ) }
						/>
					</PanelRow>
					<PanelRow className={attributes.showArrowsOptions ? '' : 'hidden'}>
						<SelectControl
							label={__( 'Arrows type', 'mgblockslider' )}
							value={ attributes.arrowType }
							options={ [
								{ label: __( 'Default', 'mgblockslider' ), value: '' },
								{ label: __( 'Squares', 'mgblockslider' ), value: 'squares' },
								{ label: __( 'Circles', 'mgblockslider' ), value: 'circles' },
							] }
							onChange={ ( val ) => setAttributes( { arrowType: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Pagination dots', 'mgblockslider' )}
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
							label={__( 'Auto hide dots', 'mgblockslider' )}
							checked={ attributes.hideControls }
							onChange={ ( val ) => setAttributes( { hideControls: val } ) }
						/>
					</PanelRow>
					<PanelRow className={attributes.showControlOptions ? '' : 'hidden'}>
						<SelectControl
							label={__( 'Paginations type', 'mgblockslider' )}
							value={ attributes.paginationType }
							options={ [
								{ label: __( 'Circles', 'mgblockslider' ), value: '' },
								{ label: __( 'Squares', 'mgblockslider' ), value: 'squares' },
								{ label: __( 'Circles with background', 'mgblockslider' ), value: 'block' },
								{ label: __( 'Squares with background', 'mgblockslider' ), value: 'squares-block' },
							] }
							onChange={ ( val ) => setAttributes( { paginationType: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Thumbnails navigation', 'mgblockslider' )}
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
							label={__( 'Auto hide thumbs', 'mgblockslider' )}
							checked={ attributes.hideThumbs }
							onChange={ ( val ) => setAttributes( { hideThumbs: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Swipe navigation', 'mgblockslider' )}
							checked={ attributes.swipeNav }
							onChange={ ( val ) => setAttributes( { swipeNav: val } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Animations', 'mgblockslider' )} initialOpen={false} className="components-panel__body__mgblockslider">
					<PanelRow>
						<ToggleControl
							label={__( 'Auto start animations', 'mgblockslider' )}
							checked={ attributes.autoStart }
							onChange={ ( val ) => setAttributes( { autoStart: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Stop animations on hover', 'mgblockslider' )}
							checked={ attributes.stopOnHover }
							onChange={ ( val ) => setAttributes( { stopOnHover: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={__( 'Animation type', 'mgblockslider' )}
							value={ attributes.animation }
							options={ [
								{ label: __( 'Swipe', 'mgblockslider' ),        value: 'slide' },
								{ label: __( 'Fade', 'mgblockslider' ),         value: 'fade' },
								{ label: __( 'Cards', 'mgblockslider' ),        value: 'cards' },
								{ label: __( 'No animation', 'mgblockslider' ), value: 'none' },
							] }
							onChange={ ( val ) => setAttributes( { animation: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Vertical animations', 'mgblockslider' )}
							checked={ attributes.vertical }
							onChange={ ( val ) => setAttributes( { vertical: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={__( 'Transition type', 'mgblockslider' )}
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
							help={ __( 'Add custom css transitions with steps() or cubic-bezier().', 'mgblockslider' ) }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__( 'Duration between slides', 'mgblockslider' )}
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
							label={__( 'Animation speed', 'mgblockslider' )}
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

				<PanelBody title={__( 'Media', 'mgblockslider' )} initialOpen={false} className="components-panel__body__mgblockslider">
					<PanelRow>
						<ToggleControl
							label={__( 'Pause content when losing focus', 'mgblockslider' )}
							checked={ attributes.pauseUnfocused }
							onChange={ ( val ) => setAttributes( { pauseUnfocused: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Wait videos to finish', 'mgblockslider' )}
							checked={ attributes.waitVideo }
							onChange={ ( val ) => setAttributes( { waitVideo: val } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__( 'Theme', 'mgblockslider' )} initialOpen={false} className="components-panel__body__mgblockslider">
					<PanelRow>
						<SelectControl
							value={ attributes.theme }
							options={ [
								{ label: __( 'Light', 'mgblockslider' ), value: 'light' },
								{ label: __( 'Dark', 'mgblockslider' ),  value: 'dark' },
							] }
							onChange={ ( val ) => setAttributes( { theme: val } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Auto minimum height', 'mgblockslider' )}
							checked={ attributes.autoHeight }
							onChange={ ( val ) => setAttributes( { autoHeight: val } ) }
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
						} ) }
						variant="secondary">
						{__( 'Restore everything to default', 'mgblockslider' )}
					</Button>
				</PanelRow>
			</InspectorAdvancedControls>
		</>
	);
};

