export function getVideoIdFromString(string) {
  try {
    const url = new URL(string);
    const { hostname } = url;

    if (hostname === 'www.youtube.com') {
      return url.searchParams.get('v');
    }

    if (hostname === 'youtu.be') {
      return url.pathname.slice(1);
    }
  } catch (error) {
    return string;
  }

  return string;
}

export function keyIsIgnored(key) {
  const ignoredKeys = ['description', 'thumbnails', 'localized'];

  return ignoredKeys.includes(key);
}

export function getProcessedValueBasedKey(key, value) {
  switch (key) {
    case 'publishedAt':
      return new Date(value).toLocaleString();

    case 'tags':
      return value.join(', ');

    default:
      return value;
  }
}
