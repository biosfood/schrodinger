const validUmlaute = "aeouAEOU"
const doReplace = (line, toggle) => line.replace(toggle.regex, toggle.on ? toggle.close : toggle.open)
const makeToggles = () => 
{return [
  {
    on: false,
    open: '\\[',
    close: '\\]',
    regex: /\$\$/
  },
  {
    on: false,
    open: '\\(',
    close: '\\)',
    regex: /\$/
  }
]}

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

function processToggles(line, toggles) {
  for (const toggle of toggles) {
    var newLine = doReplace(line, toggle)
    while (newLine != line) {
      line = newLine
      toggle.on = !toggle.on
      newLine = doReplace(line, toggle)
    }
  }
  return line
}

export function processMarkdown(data, languages) {
  var result = languages.reduce((o, language) => ({
    ...o,
    [language]: ""
  }), {})
  var toggles = makeToggles()
  var language = "common"
  data.forEach((line, index) => {
    const noSpaces = line.replace(" ", "")
    if (noSpaces == "") {
      languages.forEach(language => {
        result[language] += "</p><p>"
      })
      return
    }
    if (noSpaces.startsWith(";")) {
      result[language] += "</p><p class='fragment'>"
      line = line.substring(1)
    }
    if (noSpaces.startsWith("----")) {
      languages.forEach(language => {
        result[language] += "</p></section></section><section><section data-auto-animate><p>"
      })
      return
    }
    if (noSpaces.startsWith("---")) {
      languages.forEach(language => {
        result[language] += "</p></section><section data-auto-animate><p>"
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
    line = processToggles(line, toggles)
    line = processUmlaute(line)
    if (language == "common") {
      languages.forEach(language => {
        result[language] += `${line} `
      })
    } else {
      result[language] += `${line} `
    }
  });
  return result
}
