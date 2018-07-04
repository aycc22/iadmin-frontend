<template>
  <div>
    <p>角色管理</p>
    <Table border :columns="roleCol" :data="roleData"></Table>
  </div>
</template>

<style scoped>
  
</style>

<script>
  import { getSysRoles } from '@/api/sys-manage/role-manage'
  import expandRow from '@/view/sys-manage/role-manage/expand-row.vue';
  export default {
    components: {
      expandRow
    },
    data() {
      return {
        roleCol: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
                return h(expandRow, {
                    props: {
                        row: params.row
                    }
                });
            }
          },
          { title: '角色名', key: 'roleName'},
          { title: '创建时间', key: 'createTime'},
          { title: '修改时间', key: 'updateTime'},
          { title: '状态', key: 'deleteStatus'}
        ],
        roleData: []
      }
    },
    methods: {
      init () {
        return new Promise((resolve, reject) =>{
          getSysRoles().then(res => {
            this.roleData = res.data
          }).catch(err => {
            console.log(err)
          })
        })
      }
    },
    mounted () {
      this.init();
    }
  }
</script>