/* globals API_URL */


const login = async ({
  userId,
  password
}) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      password
    })
  }
  try {
    const results = await fetch(`http://localhost:8000/login`, requestOptions)
    const user = await handleResponse(results)
    if (user.redirectTo) {
      return user
    }
    localStorage.setItem('user', JSON.stringify(user))
    return user
  } catch (e) {
    throw e
  }
}

const autoLogin = async ({
  userId,
  token
}) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      token
    })
  }
  try {
    const results = await fetch(`${API_URL}/auto`, requestOptions)
    const user = await handleResponse(results)
    if (user.redirectTo) {
      return user
    }
    localStorage.setItem('user', JSON.stringify(user))
    return user
  } catch (e) {
    throw e
  }
}

const signup = async ({
  firstName,
  lastName,
  email,
  password,
  username
}) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      username
    })
  }
  try {
    const results = await fetch(`http://localhost:8000/signup`, requestOptions)
    const user = await handleResponse(results)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  } catch (e) {
    throw e
  }
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

async function handleResponse(response) {
  const text = await response.text()
  const data = text && JSON.parse(text)
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout()
    }
    throw (data && data.message) || response.statusText
  }
  return data
}
export const userService = {
  login,
  signup,
  autoLogin,
  logout
}