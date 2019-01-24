import {
  getVideoIdFromString,
  keyIsIgnored,
  getProcessedValueBasedKey
} from '../../helpers/video';

describe('getVideoIdFromString', () => {
  const videoId = 'SXiSVQZLje8';

  test('if you pass the www.youtube.com returns the value of the parameter "v"', () => {
    expect(
      getVideoIdFromString(`https://www.youtube.com/watch?v=${videoId}`)
    ).toBe(videoId);
  });

  test('if you pass the m.youtube.com returns the value of the parameter "v"', () => {
    expect(
      getVideoIdFromString(`https://m.youtube.com/watch?v=${videoId}`)
    ).toBe(videoId);
  });

  test('if you pass the youtu.be returns the path', () => {
    expect(getVideoIdFromString(`https://youtu.be/${videoId}`)).toBe(videoId);
  });

  test('if an unknown site is passed, return the original value', () => {
    expect(getVideoIdFromString('https://example.com/')).toBe(
      'https://example.com/'
    );
  });

  test('if no site is passed, the original value is returned', () => {
    expect(getVideoIdFromString(videoId)).toBe(videoId);
  });
});

describe('keyIsIgnored', () => {
  test('ignoring thumbnails, localized keys', () => {
    expect(keyIsIgnored('thumbnails')).toBe(true);
    expect(keyIsIgnored('localized')).toBe(true);
  });

  test('do not ignore other keys', () => {
    expect(keyIsIgnored('publishedAt')).toBe(false);
    expect(keyIsIgnored('tags')).toBe(false);
    expect(keyIsIgnored('anyOtherKey')).toBe(false);
  });
});

describe('getProcessedValueBasedKey', () => {
  test('for the key tags returns a string from the glued array', () => {
    expect(getProcessedValueBasedKey('tags', ['a', 'b'])).toBe('a, b');
  });

  test('for other keys, returns the original value', () => {
    expect(getProcessedValueBasedKey('anyOtherKey', 'otherValue')).toBe(
      'otherValue'
    );
  });
});
