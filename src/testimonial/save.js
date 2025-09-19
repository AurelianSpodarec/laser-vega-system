import { useBlockProps } from "@wordpress/block-editor";

function save() {
	return (
		<p {...useBlockProps.save()}>
			{"Laser Vega System – hello from the saved content!"}
		</p>
	);
}

export default save;
