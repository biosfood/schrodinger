const fs = require('fs');
const { exec } = require("child_process");

const buildFolder = "build"


console.log("clearing the build folder...");

fs.rmSync(`${buildFolder}`, { recursive: true, force: true }, (error) => {if (error) {console.error(error);}});
if (!fs.existsSync(buildFolder)) {
  fs.mkdirSync(buildFolder);
}

console.log("linking static files...");
exec(`ls src/static | while read in; do ln ../src/static/$in ${buildFolder} -s; done`)
