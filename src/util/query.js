export const parseQuery = function () {
  const queryObject = {}
  const arr = location.search.slice(1).split('&')
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].split('=')
    queryObject[item[0]] = decodeURIComponent(item[1])
  }
  return queryObject
}

/**
 *
 * @param {string} name 查询参数
 */
export const getQuery = function (name) {
  return parseQuery()[name]
}
