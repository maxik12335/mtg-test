export const setTimer = () => {
  const hours = new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours()
  const minuts = new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes()
  const seconds = new Date().getSeconds() > 9 ? new Date().getSeconds() : "0" + new Date().getSeconds()

  return `${hours}:${minuts}:${seconds}`
}