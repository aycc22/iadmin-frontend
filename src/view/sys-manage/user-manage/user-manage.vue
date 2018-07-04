<template>
  <div>
    <Row>
        <Col span="24">
          <Card>
              <p slot="title">
                  <Icon type="person-stalker"></Icon>
                  系统用户
              </p>
              <Row type="flex" justify="center" align="middle" class="advanced-router">
                  <Table border :columns="orderColumns" :data="sysUsers" style="width: 100%;"></Table>
              </Row>
              <Modal v-model="showRoleActive" title="角色信息">
                <Table :columns="roleCol" :data="roleData"></Table>
              </Modal>
          </Card>
        </Col>
    </Row>
  </div>
</template>

<script>
import { getSysUsers, getRolesByUsername } from '@/api/sys-manage/user-manage'

export default {
  name: 'mutative-router',
  data () {
    return {
      showRoleActive: false,
      roleCol: [
        { type: 'index', title: '序号', width: 70 },
        { title: '角色名', key: 'roleName'},
        { title: '创建时间', key: 'createTime'},
        { title: '修改时间', key: 'updateTime'},
        { title: '状态', key: 'deleteStatus'}
      ],
      roleData: [],
      orderColumns: [
        { type: 'index', title: '序号', width: 70 },
        { title: '账号', key: 'username' },
        { title: '用户名称', key: 'nickname' },
        {
          title: '所属角色',
          key: 'role',
          align: 'center',
          width: 96,
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.showRole(params.index)
                  }
                }
              }
              , '查看')
          }
        },
        {
          title: '详情',
          key: 'show_more',
          align: 'center',
          width: 96,
          render: (h, params) => {
            return h(
              'Button',
              {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    let argu = { user_id: params.row.id }
                    this.$router.push({
                      name: 'order-info',
                      params: argu
                    })
                  }
                }
              },
              '了解详情'
            )
          }
        }
      ],
      sysUsers: []
    }
  },

  computed: {
    avatorImage () {
      return localStorage.avatorImgPath
    }
  },
  methods: {
    init () {
      return new Promise((resolve, reject) => {
        getSysUsers().then(res => {
          this.sysUsers = res.data
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    showRole (index) {
      let userName = this.sysUsers[index].username    
      return new Promise((resolve, reject) => {
        getRolesByUsername(userName).then(res => {
          this.roleData = res.data
          this.showRoleActive = true
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  mounted () {
    this.init();
  }
}
</script>
