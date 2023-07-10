export const validateName = (value) => {
  let result = Array.from(value.matchAll(/[А-Яа-я]+/g))
  if(!result[1]) {
    result = `${result[0][0]}`
  } else {
    result = `${result[0][0]} ${result[1][0].slice(0, 1)}.`
  }
  
  return result
}