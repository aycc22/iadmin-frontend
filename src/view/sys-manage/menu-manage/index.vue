<template>
  <div> 
    <Card>
      <Row>
        <Col span="24">
          <Table border :columns="menuCol" :data="menuData"></Table>
        </Col>
      </Row>
    </Card>

    <Modal v-model="showEditModal" @on-ok="editOk" title="菜单编辑"> 
      <Row :gutter="16">
        <Col span="12"> 
          <Input v-model="editRowData.menuName" placeholder="请输入菜单名称..." ><span slot="prepend">菜单名称:</span></Input>
        </Col>
        <Col span="12"> 
          <Input v-model="editRowData.menuCode" placeholder="请输入菜单编码..." ><span slot="prepend">菜单编码:</span></Input> 
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 8px;">
        <Col span="12"> 
          <Input v-model="editRowData.permissionName" placeholder="请输入菜单编码..." ><span slot="prepend">权限名称:</span></Input> 
        </Col>
        <Col span="12"> 
          <Input v-model="editRowData.permissionCode" placeholder="请输入菜单名称..." ><span slot="prepend">权限编码:</span></Input>
        </Col>
      </Row> 
    </Modal>

  </div>
</template>

<script>
  import { getSysMenus } from '@/api/sys-manage/menu-manage'
  import expandRow from '@/view/sys-manage/menu-manage/expand-row.vue'
  
  export default {
    components: {
      expandRow
    },
    data() {
      return {
        editBtn: (h, params) => h('Button', 
                  {
                    props: { type: 'primary',size: 'small' },
                    style: { margin: '0 5px'},
                    on: {
                      click: () => {
                        this.editRowData = params.row
                        this.showEditModal = true
                      }
                    }
                  }, '编缉'),
        delBtn: (h, params) => h('Button', 
                      {
                        props: { type: 'error',size: 'small'},
                        style: { margin: '0 5px'},
                        on: {
                          click: () => {
                            this.editRowData = params.row
                            this.showEditModal = true
                          }
                        }
                      }, '删除'),
        editRowData: {},
        showEditModal: false,
        menuCol: [
          {
            title: '#',
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
          { title: '菜单名称', key: 'menuName' },
          { title: '菜单编码', key: 'menuCode' },
          { title: '权限名称', key: 'permissionName' },
          { title: '权限编码', key: 'permissionCode' },
          { title: '创建时间', key: 'gmtCreate' },
          { title: '修改时间', key: 'gmtModified' },
          {
            title: '操作',
            key: 'role',
            align: 'center',
            // width: 196,
            render: (h, params) => {
              return h('div',[this.editBtn(h, params), this.delBtn(h, params)])
            }
          }
        ],
        menuData: []
      }
    },
    methods: {
      getSysMenusData () {
        return new Promise((resolve, reject)=>{
          getSysMenus().then(res => {
            this.menuData = res.data
          }).catch(err => {
            console.log(err)
          })
        })
      },
      editOk () {
        
        this.$Message.info('Clicked ok'+ this.editRowData.menuCode);
      }
    },
    mounted() {
      this.getSysMenusData ()
    }
  }
</script>