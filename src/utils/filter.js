export function timeFormat (data, format = '-') {
  let date = new Date(data)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDay()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return [year, month, day].join(format)
}
