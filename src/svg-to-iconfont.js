const shell = require("shelljs");
const fs = require("fs-extra");

async function svgToIconfont() {
  shell.exec("rm -rf dist/iconfont");
  fs.ensureDirSync("dist/iconfont");
  shell.exec("icon-font-generator svgs/*.svg -o dist/iconfont --normalize");
}

svgToIconfont();

module.exports = svgToIconfont;
