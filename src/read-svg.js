const fs = require("fs");

function readSvg(path) {
  if (!fs.existsSync(path)) {
    console.log(`${path} does not exist`);
    return;
  }
  const buffer = fs.readFileSync(path);
  return buffer.toString();
}

module.exports = readSvg;
