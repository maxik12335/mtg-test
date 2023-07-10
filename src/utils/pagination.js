export const getPagesList = (length) => {
  const list = []
  for(let i = 0; i < length; i++) {
    list.push(i + 1)
  }

  return list
}