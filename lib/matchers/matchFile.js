const _ = require('lodash');

const matchFile = (searchTerm, filePath) => {
  const searchParts = searchTerm.split('.');
  const pathParts = filePath.replace(/\.[^/]+$/, '').split('/');
  const pathScore = _.reduce(
    pathParts,
    (prev, pathPart) => (searchParts.includes(pathPart) ? prev + 1 / pathParts.length : prev),
    0
  );
  return pathScore;
};

module.exports = matchFile;
