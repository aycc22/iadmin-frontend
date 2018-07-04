import axios from '@/libs/api.request'

export const getSysUsers = () => {
  return axios.request({
    url: '/api/sysUser/getSysUser',
    method: 'get'
  })
}

export const getRolesByUsername = (username) => {
  return axios.request({
    url: '/api/sysUser/getRolesByUsername',
    params: {
      username
    },
    method: 'get'
  })
}