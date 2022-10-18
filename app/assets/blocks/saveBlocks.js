import { InnerBlocks } from '@wordpress/block-editor';

export const SaveSlider = ( props ) => {
	let blockId = ( '' !== props.attributes.customId ) ? props.attributes.customId : props.attributes.id;
	for ( let i = 0; i < blockId.length; i++ ) {
		// Replace every instance.
		blockId = blockId.replace( ' ', '-' );
	}
	return <InnerBlocks.Content />;
};

export const SaveSlides = () => {
	return <InnerBlocks.Content />;
};
