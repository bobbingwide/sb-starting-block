/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import clsx from 'clsx';
import { ServerSideRender } from '@wordpress/editor';
//import { Fragment} from '@wordpress/element';
import { InspectorControls} from '@wordpress/block-editor';
import { TextControl, SelectControl, PanelBody } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './editor.scss';

var mappedThemeOptions = [
	{ label: "Default", value: "default" },
	{ label: "Bar", value: "bar"},
	{ label: "Custom", value: "custom"},
	{ label: "Dark", value: "dark"},
	{ label: "Light", value: "light"},
	{ label: "Orman", value: "orman"},
	{ label: "Pascal", value: "pascal"}
];

var mappedEffectOptions = [
	{ label: "Random", value: "random" },
	{ label: "Slice down right", value: "sliceDownRight" },
	{ label: "Slide down left", value: "sliceDownLeft" },
	{ label: "Slice up right", value: "sliceupright" },
	{ label: "Slice up left", value: "sliceUpLeft" },
	{ label: "Slice up down", value: "sliceUpDown" },
	{ label: "Slice up down left", value: "sliceUpDownLeft" },
	{ label: "Fold", value: "fold" },
	{ label: "Fade", value: "fade" },
	{ label: "Box random", value: "boxRandom" },
	{ label: "Box rain", value: "boxRain" },
	{ label: "Box rain reverse", value: "boxRainReverse" },
	{ label: "Box rain grow", value: "boxRainGrow" },
	{ label: "Box rain grow reverse", value: "boxRainGrowReverse" },
	{ label: "Slide in left", value: "slideInLeft" },
	{ label: "Slide in right", value: "slideInRight" }
];

/* y, n, file, full */
var mappedLinkOptions = [
	{ label: "Yes", value: 'y'},
	{ label: "No", value: 'n' },
	{ label: "File", value: 'file'},
	{ label: "Full", value: 'full'}
];

/* y n */
var mappedCaptionOptions = [
	{ label: "Yes", value: 'y'},
	{ label: "No", value: 'n' }
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit ( { attributes, className, isSelected, setAttributes } ) {
	const { textAlign } = attributes;
	const blockProps = useBlockProps( {
		className: clsx( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );

	const onChangeTheme = ( event ) => {
		setAttributes( { theme: event } );
	};
	const onChangeEffect = ( event ) => {
		setAttributes( { effect: event } );
	};
	const onChangeLink = ( event ) => {
		setAttributes( { link: event } );
	};
	const onChangeCaption = ( event ) => {
		setAttributes( { caption: event } );
	};
	return (
		<div { ...blockProps}>
			<InspectorControls>
				<PanelBody>
					<SelectControl label={__( "Theme", 'oik-nivo-slider') } value={attributes.theme} onChange={onChangeTheme} options={mappedThemeOptions} />
					<SelectControl label={__( "Effect", 'oik-nivo-slider') } value={attributes.effect} onChange={onChangeEffect} options={mappedEffectOptions} />
					<SelectControl label={__( "Link", 'oik-nivo-slider') } value={attributes.link} onChange={onChangeLink} options={mappedLinkOptions} />
					<SelectControl label={__( "Caption", 'oik-nivo-slider') } value={attributes.caption} onChange={onChangeCaption} options={mappedCaptionOptions} />

				</PanelBody>

			</InspectorControls>
			<ServerSideRender
				block="oik-nivo-slider/nivo" attributes={attributes}
			/>
		</div>
	);
}
