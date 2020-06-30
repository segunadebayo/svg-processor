const svgr = require("@svgr/core").default;
const fs = require("fs");
const fsExtra = require("fs-extra");
const prettier = require("prettier");
const readSvg = require("./read-svg");
const path = require("path");
const SVGO = require("svgo");
const Listr = require("listr");
const cleanSvg = require("./clean-svg");

function toReact(filePath, outDir) {
  const svgCode = readSvg(filePath);

  if (!svgCode) return;

  const fileName = getFileName(filePath);
  const outPath = path.resolve(__dirname, outDir, fileName + ".jsx");

  const componentName = getComponentName(filePath);

  svgr(
    svgCode,
    {
      icon: true,
      ref: true,
    },
    { componentName }
  ).then((jsCode) => {
    const code = prettier.format(jsCode, { parser: "babel" });
    fsExtra.ensureFileSync(outPath);
    fs.writeFileSync(outPath, code);
  });
}

function getFileName(filePath) {
  return path.basename(filePath).split(".").slice(0, -1).join("-");
}

function getComponentName(filePath) {
  const fileName = getFileName(filePath);
  return fileName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

const tasks = new Listr([
  {
    title: "Clean Svgs",
    task: () => {
      const paths = fs.readdirSync("svgs");
      paths.forEach(async (svgPath) => {
        const relativePath = path.resolve("svgs", svgPath);
        await cleanSvg(relativePath);
      });
    },
  },
  {
    title: "Convert to React",
    task: () => {
      const paths = fs.readdirSync("svgs");
      paths.forEach((svgPath) => {
        const relativePath = path.join("svgs", svgPath);
        toReact(relativePath, "../dist/react");
      });
    },
  },
]);

tasks.run().catch((err) => {
  console.error(err);
});
