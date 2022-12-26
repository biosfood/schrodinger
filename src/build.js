const fs = require('fs');
const { exec } = require("child_process");

const buildFolder = "build"
const articleFolder = "src/article"

const languages = ["German", "English"]

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

console.log("processing article entries...");

const applyBigMathMode = line => line.replace(/\$\$/, bigMathMode ? "\\]" : "\\[")
const applyMathMode = line => line.replace(/\$/, mathMode ? "\\)" : "\\(")

function processMathModes(line) {
  var bigMathModeReplace = applyBigMathMode(line);
  while (bigMathModeReplace != line) {
    line = bigMathModeReplace;
    bigMathMode = !bigMathMode;
    bigMathModeReplace = applyBigMathMode(line);
  }

  var mathModeReplace = applyMathMode(line)
  while (mathModeReplace != line) {
    line = mathModeReplace;
    mathMode = !mathMode;
    mathModeReplace = applyMathMode(line);
  }
  return line
}

function processLinks(line) {
  const links = line.match(/\[.*\]\(.*\)/)
  if (!links) {
    return line;
  }
  links.forEach(link => {
    const target = link.match(/(?<=\().*(?=\))/)[0]
    const name = link.match(/(?<=\[).*(?=\])/)[0]
    line = line.replace(link, `<a href="${target}">${name}</a>`)
  });
  return line;
}

var result = Object.keys(articleEntries).reduce((o, name) => ({
  ...o,
  [name]: languages.reduce((o, language) => ({
    ...o,
    [language]: ""
  }), {})
}), {})

const validUmlaute = "aeouAEOU"

function processUmlaute(line) {
  const matches = line.match(/(?!\\)\"[aeouAEOU]/)
  if (!matches) {
    return line
  }
  matches.forEach(umlaut => {
    line = line.replace(umlaut, `&${umlaut.substring(1)}uml;`)
  })
  return line
}

for (const [name, data] of Object.entries(articleEntries)) {
  var mathMode = false
  var bigMathMode = false
  var language = "common"
  data.forEach((line, index) => {
    const noSpaces = line.replace(" ", "")
    if (noSpaces == "") {
      line = "</p><p>"
    }
    if (noSpaces.startsWith("%")) {
      language = noSpaces.substring(1)
      return
    }
    for (var i = 1; i < 5; i++) {
      const headerStart = `${"#".repeat(i)} `
      if (line.startsWith(headerStart)) {
        line = `<h${i}>${line.substring(i+1)}</h${i}>`
      }
    }
    line = processUmlaute(line)
    line = processLinks(line)
    line = processMathModes(line)
    if (language == "common") {
      languages.forEach(language => {
        result[name][language] += `${line} `
      })
    } else {
      result[name][language] += `${line} `
    }
  });
}

console.log("loading template...");
const template = fs.readFileSync('src/template.html', 'utf8');

console.log("writing articles...");
for (const [name, data] of Object.entries(result)) {
  for (const [language, text] of Object.entries(data)) {
    fs.writeFile(`${buildFolder}/${name}_${language}.html`, template.replace("<DATA />", text), (error) => {});
  }
}
