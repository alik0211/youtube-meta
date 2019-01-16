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
