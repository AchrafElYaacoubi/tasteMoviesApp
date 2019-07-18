export const urlPrepare = (url, object) => {
  Object.keys(object).forEach(key => {
    url = url.replace(':'+key, object[key])
  });
  return url
}
