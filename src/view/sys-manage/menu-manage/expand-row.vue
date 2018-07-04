<template>
  <div>
     <Table :showHeader="false" :columns="permisCol" :data="permisData"></Table>    
  </div>
</template>

<style scoped>
 
</style>

<script>
  import { getSysMenus, getPermissionsByMenuCode } from '@/api/sys-manage/menu-manage'
  export default {
    data() {
      return {
        permisCol:[
          { title: '', width: 48 },
          { title: '菜单名称', key: 'menuName' },
          { title: '菜单编码', key: 'menuCode' },
          { title: '资源名称', key: 'permissionName' },
          { title: '资源编码', key: 'permissionCode' },
          { title: '创建时间', key: 'gmtCreate' },
          { title: '修改时间', key: 'gmtModified' }
        ],
        permisData:[]
      }
    },
    props:{
      row: Object
    },
    methods: {
      getPermis (menuCode) {
        return new Promise((resolve, reject) =>{
          getPermissionsByMenuCode(menuCode).then(res => {
            this.permisData = res.data
          }).catch(err =>{
            console.log(err)
          })
        })
      }
    },
    // computed: {
    //   processData () {
    //     return this.getPermis(this.row.menuCode)//this.row.menuCode +'菜单的资源'
    //   } 
    // },
    mounted() {
      this.getPermis(this.row.menuCode)
    }
  }
</script>