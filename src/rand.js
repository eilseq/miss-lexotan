export const fxcolor = () => {
  let hash = 0
  for (let i = 0; i < fxhash.length; i++) {
    hash = fxhash.charCodeAt(i) + ((hash << 5) - hash)
  }
  let color = "#"
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    color += value.toString(16)
  }
  return color
}
