import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/api/home/auth',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  console.log('使用token获取用户信息', token)
  return axios.request({
    url: '/api/home/getInfo',
    params: {
      token
    },
    method: 'post'
  })
}

export const logout = (token) => {
  console.log('退出', token)
  return axios.request({
    url: '/api/home/signOut',
    params: {
      token
    },
    method: 'post'
  })
}
