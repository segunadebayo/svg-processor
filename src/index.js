const cleanSvg = require("./clean-svg");
const { toReact } = require("./svg-to-react");
const svgToIconfont = require("./svg-to-iconfont");

const paths = fs.readdirSync("svgs");

const tasks = new Listr([
  {
    title: "Clean Svgs",
    task: () => {
      paths.forEach(async (svgPath) => {
        const relativePath = path.resolve("svgs", svgPath);
        await cleanSvg(relativePath);
      });
    },
  },
  {
    title: "Convert to React",
    task: () => {
      paths.forEach((svgPath) => {
        const relativePath = path.join("svgs", svgPath);
        toReact(relativePath, "../dist/react");
      });
    },
  },
  {
    title: "Convert to icon font",
    task: svgToIconfont
  }
]);

tasks.run().catch((err) => {
  console.error(err);
});