import axios from '@/libs/api.request'

export const getSysRoles = () => {
  return axios.request({
    url: '/api/sysRole/getSysRoles',
    method: 'post'
  })
}