import * as React from "react";

function SampleIcon(props, svgRef) {
  return (
    <svg width="1em" height="1em" ref={svgRef} {...props}>
      <rect
        x={10}
        y={10}
        height={100}
        width={100}
        style={{
          stroke: "#ff0000",
          fill: "#0000ff",
        }}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SampleIcon);
export default ForwardRef;
