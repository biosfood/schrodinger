import { rmSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFile } from 'fs'
import { exec } from "child_process"
import {processMarkdown} from './markdown.js'

const links = {
  "../../node_modules/reveal.js/dist/reveal.css": "build/css/",
  "../../node_modules/reveal.js/dist/theme/moon.css": "build/css/",
  "../../node_modules/reveal.js/dist/reveal.js": "build/js/",
  "../../src/static/css/style.css": "build/css/",
  "../../src/static/video/oscillator.mp4": "build/video"
}

const buildFolder = "build"

const flags = {
  German:  '&#127465;&#127466;',
  English: '&#127468;&#127463;',
}
const languages = Object.keys(flags)

const formats = ['article', 'presentation']

function readDirectory(directory) {
  return readdirSync(directory).reduce((o, fileName) => ({
    ...o,
    [fileName.replace(".md", "")]: processMarkdown(readFileSync(`${directory}/${fileName}`, 'utf8').split("\n"), languages)
  }), {});
}

function generateLanguageSwitch(name) {
  var result = ""
  for (const [language, flag] of Object.entries(flags)) {
    result += `<a href="${name}_${language}.html">${flag}</a>`
  }
  return result
}

console.log("clearing the build folder...");

rmSync(`${buildFolder}`, { recursive: true, force: true }, (error) => {if (error) {console.error(error);}});
if (!existsSync(buildFolder)) {
  mkdirSync(buildFolder);
}
if (!existsSync(buildFolder + "/css")) {
  mkdirSync(buildFolder + "/css");
}
if (!existsSync(buildFolder + "/js")) {
  mkdirSync(buildFolder + "/js");
}
if (!existsSync(buildFolder + "/video")) {
  mkdirSync(buildFolder + "/video");
}

console.log("linking static files...")
for (const [from, to] of Object.entries(links)) {
  exec(`ln ${from} ${to} -s`)
}

console.log("reading files...")
const data = formats.reduce((o, format) =>  ({
  ...o,
  [format]: {
    data: readDirectory(`src/${format}/`),
    template: readFileSync(`src/template_${format}.html`, 'utf8')
  }
}), {})

console.log("writing files...");
for (const [format, formatData] of Object.entries(data)) {
  for (const [name, data] of Object.entries(formatData.data)) {
    for (const [language, text] of Object.entries(data)) {
      writeFile(`${buildFolder}/${format}_${name}_${language}.html`, 
                formatData.template
                .replace("<DATA />", text)
                .replace("<LANGUAGE_SWITCH />", generateLanguageSwitch(name)),
              (error) => {});

    }
  }
}
