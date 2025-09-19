import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

function Edit() {
	return (
		<p {...useBlockProps()}>
			{__("Laser Vega System – hello from the editor!", "laser-vega-system")}
		</p>
	);
}

export default Edit;
