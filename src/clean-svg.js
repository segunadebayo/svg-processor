const fs = require("fs");
const prettier = require("prettier");
const readSvg = require("./read-svg");
const path = require("path");
const SVGO = require("svgo");

async function cleanSvg(filePath) {
  const content = readSvg(filePath);

  const svgo = new SVGO({
    plugins: [
      { removeXMLNS: true },
      { removeViewBox: false },
      {
        removeAttrs: {
          elemSeparator: "-",
          attrs: ["svg-xmlns:xlink"],
        },
      },
    ],
  });

  let cleaned;

  try {
    cleaned = await svgo.optimize(content, { path: filePath });
  } catch (error) {
    // no-op
  }

  if (!cleaned) return;

  const formatted = prettier.format(cleaned.data, { parser: "html" });
  fs.writeFileSync(cleaned.path, formatted);
}

module.exports = cleanSvg;
