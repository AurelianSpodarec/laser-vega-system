import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	const sizePadding =
		attributes.size === "large"
			? "12px 24px"
			: attributes.size === "small"
			? "6px 12px"
			: "8px 16px";

	const style = {
		color: attributes.color,
		backgroundColor: attributes.bg,
		padding: sizePadding,
		borderRadius: "9999px",
		display: "inline-block",
		fontWeight: 600,
		textDecoration: "none",
	};

	return (
		<a {...blockProps} href={attributes.url} style={style} className="btn">
			{attributes.text}
			{attributes.icon && (
				<i className={attributes.icon} style={{ marginLeft: "8px" }}></i>
			)}
		</a>
	);
}
