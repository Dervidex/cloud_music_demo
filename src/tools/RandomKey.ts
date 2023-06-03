const getRandomKey = () => {
  return Date.now() + Math.round(Math.random() * 10000 * Math.random())
}
export default getRandomKey