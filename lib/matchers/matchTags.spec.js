const matchTags = require('./matchTags');

describe('Tags Matcher', () => {
  describe('Enclosing elements', () => {
    it('Should return enclosing h1 elements', () => {
      const lines = [
        '',
        'lorem ipsum',
        '# test h1 header',
        ':noop-tag:test-tag:',
        'lorem ipsum',
        ''
      ];
      const searchTerm = 'test-tag';
      const matchingTags = matchTags(searchTerm, lines);
      console.log('matchingTags', matchingTags);
    });
  });
  describe('Line ranges', () => {});
  describe('Tag scores', () => {});
});
