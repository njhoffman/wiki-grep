const _ = require('lodash');
// bash.streams
// lang.js.lodash.each
// lodash.each
// _.each
//
// /cmd/kubernetes.md
// /cmd/files.md
// /lang/js/loops.md
// /lang/js/libs/lodash.md

// { term: 'lodash.each' }
// { path: '/lang/js/libs/lodash.md',
//   pathScore: 1,
//   lines: [...],
//   tagsMatch: [{ tag: 'each', tagEl: 'h2', lineStart: 3, lineEnd: 10, score: 1 },
//               { tag: 'each', tagEl: 'codeblock', lineStart: 6, lineEnd: 9, score: 1 }]
// }
//
// { term: 'lang.js.lodash.each' }
// { path: '/lang/js/libs.md',
//   pathScore: 2,
//   lines: [...],
//   tagsMatch: [{ tag: 'lodash.each', tagEl: 'h2', lineStart: 3, lineEnd: 10, score: 2 },
//               { tag: 'each', tagEl: 'codeblock', lineStart: 6, lineEnd: 9, score: 2 }]
// }

const getEnclosingElement = line => {
  if (line === undefined) {
    // if line doesn't exist, tag is at top and it is file enclosing
    return 'file';
  }
  const elements = [
    ['h1', /^# \w+/],
    ['h2', /^## \w+/],
    ['h3', /^### \w+/],
    ['h4', /^#### \w+/],
    ['h5', /^##### \w+/],
    ['h6', /^###### \w+/],
    ['codeblock', /^```$/]
  ];
  const matchingElement = _.find(elements, el => {
    return el[1].test(line) ? el[0] : null;
  });
  return !_.isEmpty(matchingElement) ? matchingElement[0] : null;
};

const parseTags = lines => {
  const tags = [];
  _.each(lines, (line, n) => {
    _.each(line.split(/:\w:/), tag => {
      tags.push({ tagEl: getEnclosingElement(lines[n - 1]) });
    });
  });
  return tags;
};

const matchTags = (searchTerm, lines) => {
  const searchParts = searchTerm.split('.');
  const tags = parseTags(lines);
  return tags;
};

module.exports = matchTags;
