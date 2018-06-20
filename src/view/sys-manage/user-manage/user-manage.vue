<template>
    <div>
        <Row>
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="person-stalker"></Icon>
                        系统用户(动态路由)
                    </p>
                    <Row type="flex" justify="center" align="middle" class="advanced-router">
                        <Table border :columns="orderColumns" :data="sysUsers" style="width: 100%;"></Table>
                    </Row>
                </Card>
            </Col>
            <Button @click="init" type="primary">get users</Button>
        </Row>
    </div>
</template>

<script>
import { getSysUsers } from '@/api/sys-manage/user-manage'

export default {
  name: 'mutative-router',
  data () {
    return {
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
      this.$Modal.info({
        title: '角色信息',
        content: `Name：${this.sysUsers[index].username}<br>nickname${this.sysUsers[index].nickname}`
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
