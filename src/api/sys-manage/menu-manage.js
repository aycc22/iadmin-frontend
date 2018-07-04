import axios from '@/libs/api.request'

export const getSysMenus = () => {
  return axios.request({
    url: '/api/sysMenu/getSysMenus',
    method: 'get'
  })
}

export const getPermissionsByMenuCode = (menuCode) => {
  return axios.request({
    url: '/api/sysMenu/getPermissionsByMenuCode',
    params: {
      menuCode
    },
    method: 'get'
  })
}