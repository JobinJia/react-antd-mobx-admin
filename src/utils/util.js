export const getToken = () => {
  const token = localStorage.getItem('token') || null
  return token
}
export const setToken = (value) => {
  localStorage.setItem('token', value)
}
