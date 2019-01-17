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

export function getHandlerFromKey(key) {
  const handlers = {
    publishedAt(value) {
      return new Date(value).toLocaleString();
    },
    tags(value) {
      return value.join(', ');
    }
  };

  const defaultHandler = value => value;

  return key in handlers ? handlers[key] : defaultHandler;
}
