const svgr = require("@svgr/core").default;
const fs = require("fs");
const fsExtra = require("fs-extra");
const prettier = require("prettier");

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`;

function toReact(name, outPath) {
  svgr(
    svgCode,
    {
      icon: true,
      ref: true,
    },
    { componentName: name }
  ).then((jsCode) => {
    const code = prettier.format(jsCode, { parser: "babel" });
    fsExtra.ensureFileSync(outPath);
    fs.writeFileSync(outPath, code);
  });
}

toReact("SampleIcon", "dist/react/sample-icon.jsx");
