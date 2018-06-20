import axios from '@/libs/api.request'

export const getSysUsers = () => {
  return axios.request({
    url: '/api/sysUser/getSysUser',
    method: 'get'
  })
}
