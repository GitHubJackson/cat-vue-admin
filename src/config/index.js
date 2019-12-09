const protocol = 'http'
const host = process.env.NODE_ENV === 'production' ? 'zhouweibin.top' : 'localhost'
const port = '400*'
const baseUrl = `${protocol}://${host}:${port}`

export default {
  baseUrl
}
