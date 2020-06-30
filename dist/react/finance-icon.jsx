import * as React from "react";

function FinanceIcon(props, svgRef) {
  return (
    <svg width="1em" height="1em" ref={svgRef} {...props}>
      <defs>
        <path id="a" d="M0 220h170.742V.042H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#00394D" d="M6.627 213.373h157.71V6.627H6.627z" />
        <path
          fill="#00394D"
          d="M0 220h170.964V0H0v220zm13.697-13.694h143.574V13.69H13.697v192.617z"
        />
        <path
          fill="#FFF"
          d="M104.983 126.557c-11.21 0-20.296-9.093-20.296-20.313 0-11.216 9.086-20.31 20.296-20.31 11.21 0 20.298 9.094 20.298 20.31 0 11.22-9.088 20.313-20.298 20.313M72.049 46.772L45.468 73.378l26.581 26.6 26.579-26.6z"
        />
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="#F95000"
          d="M38.647 165.62H132.1v-13.689H38.647zm0 21.556H132.1v-13.689H38.647z"
          mask="url(#b)"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(FinanceIcon);
export default ForwardRef;
