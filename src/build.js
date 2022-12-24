const fs = require('fs');
const { exec } = require("child_process");

const buildFolder = "build"
const articleFolder = "src/article"

console.log("clearing the build folder...");

fs.rmSync(`${buildFolder}`, { recursive: true, force: true }, (error) => {if (error) {console.error(error);}});
if (!fs.existsSync(buildFolder)) {
  fs.mkdirSync(buildFolder);
}

console.log("linking static files...");
exec(`ls src/static | while read in; do ln ../src/static/$in ${buildFolder} -s; done`)

console.log("reading article files...");
const articleEntries = fs.readdirSync(articleFolder).reduce((o, fileName) => ({
  ...o,
  [fileName.replace(".md", "")]: fs.readFileSync(`${articleFolder}/${fileName}`, 'utf8').split("\n")
}), {});

for (const [name, data] of Object.entries(articleEntries)) {
  data.forEach((line, index) => {
    for (var i = 1; i < 5; i++) {
      const headerStart = `${"#".repeat(i)} `
      if (line.startsWith(headerStart)) {
        line = `<h${i}>${line.substring(i+1)}</h${i}>`
        data[index] = line;
      }
    }
  });
}

console.log("processing article entries...");
for (const [name, data] of Object.entries(articleEntries)) {
  articleEntries[name] = data.join("\n");
}


console.log("loading template...");
const template = fs.readFileSync('src/template.html', 'utf8');

console.log("writing articles...");
for (const [name, data] of Object.entries(articleEntries)) {
  fs.writeFile(`${buildFolder}/${name}.html`, template.replace("<DATA />", data), (error) => {});
}
