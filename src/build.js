import { rmSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFile } from 'fs'
import { exec } from "child_process"
import {processMarkdown} from './markdown.js'

const buildFolder = "build"
const articleFolder = "src/article"

const flags = {
  German:  '&#127465;&#127466;',
  English: '&#127468;&#127463;',
}

const languages = Object.keys(flags)

console.log("clearing the build folder...");

rmSync(`${buildFolder}`, { recursive: true, force: true }, (error) => {if (error) {console.error(error);}});
if (!existsSync(buildFolder)) {
  mkdirSync(buildFolder);
}

console.log("linking static files...");
exec(`ls src/static | while read in; do ln ../src/static/$in ${buildFolder} -s; done`)

console.log("reading article files...");
const articleEntries = readdirSync(articleFolder).reduce((o, fileName) => ({
  ...o,
  [fileName.replace(".md", "")]: readFileSync(`${articleFolder}/${fileName}`, 'utf8').split("\n")
}), {});

console.log("processing article entries...");

var result = Object.keys(articleEntries).reduce((o, name) => ({
  ...o,
  [name]: processMarkdown(articleEntries[name], languages)
}), {})

console.log("loading template...");
const template = readFileSync('src/template.html', 'utf8');

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
    writeFile(`${buildFolder}/${name}_${language}.html`, 
                  template.replace("<DATA />", text)
                          .replace("<LANGUAGE_SWITCH />", generateLanguageSwitch(name)),
                  (error) => {});
  }
}
