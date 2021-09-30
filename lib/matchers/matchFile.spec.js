const matchFile = require('./matchFile');

describe('Filepath Matcher', () => {
  it('Should return a path score of 1 if exact match', () => {
    const searchTerm = 'test.search.term';
    const filePath = 'test/search/term.md';
    const score = matchFile(searchTerm, filePath);
    expect(score).to.equal(1);
  });

  it('Should return a path score of 0.25 if 1 term matches path length 4', () => {
    const searchTerm = 'term.length';
    const filePath = 'partial/matching/term/path.md';
    const score = matchFile(searchTerm, filePath);
    expect(score).to.equal(0.25);
  });

  it('Should return a path score of 0.5 if 1 term matches path length 2', () => {
    const searchTerm = 'path';
    const filePath = 'term/path.md';
    const score = matchFile(searchTerm, filePath);
    expect(score).to.equal(0.5);
  });

  it('Should return a path score of 0.5 if 2 terms match path length 4', () => {
    const searchTerm = 'term.path';
    const filePath = 'partial/matching/term/path.md';
    const score = matchFile(searchTerm, filePath);
    expect(score).to.equal(0.5);
  });
});
