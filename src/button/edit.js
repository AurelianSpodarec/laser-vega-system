import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl, URLInputButton, ColorPalette, PanelBody, SelectControl } from "@wordpress/components";

function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  const previewStyle = {
    color: attributes.color,
    backgroundColor: attributes.bg,
    padding: attributes.size === "large" ? "12px 24px" : attributes.size === "small" ? "6px 12px" : "8px 16px",
    borderRadius: "9999px",
    display: "inline-block",
    fontWeight: 600,
    textDecoration: "none",
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Button Settings">
          <TextControl label="Button Text" value={attributes.text} onChange={(text) => setAttributes({ text })} />
          {/* <URLInputButton label="URL" url={attributes.url} onChange={(url) => setAttributes({ url })} /> */}
          <ColorPalette label="Text Color" value={attributes.color} onChange={(color) => setAttributes({ color })} />
          <ColorPalette label="Background Color" value={attributes.bg} onChange={(bg) => setAttributes({ bg })} />
          <SelectControl
            label="Size"
            value={attributes.size}
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" }
            ]}
            onChange={(size) => setAttributes({ size })}
          />
          <TextControl label="Icon Class (optional)" value={attributes.icon} onChange={(icon) => setAttributes({ icon })} />
        </PanelBody>
      </InspectorControls>

      <a style={previewStyle} href={attributes.url}>
        {attributes.text} {attributes.icon && <i className={attributes.icon} style={{ marginLeft: "8px" }}></i>}
      </a>
    </div>
  );
}

export default Edit
