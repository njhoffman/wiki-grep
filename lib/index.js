const getFiles = require('./files');

const checkFilesMatch = files => {};

const start = options => {
  const notePaths = ['~/wiki/commands'];
  console.log(`Start: ${options}`);
  const files = getFiles(notePaths[0]);
  const matchFuncs = [filesMatch, tagsMatch, headersMatch, globalMatch];
  const matches = [];
  matchFuncs.some(matchFunc => {
    matches.push(matchFunc(files));
  });
  if (matche.length > 0) {
    console.log(`Found matches`);
  } else {
    console.log(`No matches`);
    process.exit(1);
  }
};

start(process.argv);
