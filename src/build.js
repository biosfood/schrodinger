const fs = require('fs');
const { exec } = require("child_process");

const buildFolder = "build"
const articleFolder = "src/article"

const flags = {
  German:  '&#127465;&#127466;',
  English: '&#127468;&#127463;',
}

const languages = Object.keys(flags)

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
  const matches = line.match(/(?!\\)\"[aeouAEOU]/g)
  if (!matches) {
    return line
  }
  matches.forEach(umlaut => {
    line = line.replaceAll(umlaut, `&${umlaut.substring(1)}uml;`)
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
      languages.forEach(language => {
        result[name][language] += "</p><p>"
      })
      return
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
    line = line.replaceAll(/(?!\\)\"s/g, "&szlig;")
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

function generateLanguageSwitch(name) {
  var result = ""
  for (const [language, flag] of Object.entries(flags)) {
    result += `<a href="${name}_${language}.html">${flag}</a>`
  }
  return result
}

console.log("writing articles...");
for (const [name, data] of Object.entries(result)) {
  for (const [language, text] of Object.entries(data)) {
    fs.writeFile(`${buildFolder}/${name}_${language}.html`, 
                  template.replace("<DATA />", text)
                          .replace("<LANGUAGE_SWITCH />", generateLanguageSwitch(name)),
                  (error) => {});
  }
}
