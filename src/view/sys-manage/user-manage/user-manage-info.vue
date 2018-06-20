<template>
  <div>
    <Row>
      <Col span="12">
        <Card>
            <p slot="title">
                <Icon type="ios-list"></Icon>
                角色信息{{ userid }}
            </p>
            <Row type="flex" justify="center" align="middle" class="advanced-router">
                <Table border :columns="orderColumns" :data="sysUsers" style="width: 100%;"></Table>
            </Row>
        </Card>
      </Col>
      <Col span="12">
        <Card>
            <p slot="title">
                <Icon type="ios-list"></Icon>
                权限信息{{ userid }}
            </p>
            <Row type="flex" justify="center" align="middle" class="advanced-router">
                <Table border :columns="orderColumns" :data="sysUsers" style="width: 100%;"></Table>
            </Row>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <Card>
            <p slot="title">
                <Icon type="ios-list"></Icon>
                资源信息{{ userid }}
            </p>
            <Row type="flex" justify="center" align="middle" class="advanced-router">
                <Table border :columns="orderColumns" :data="sysUsers" style="width: 100%;"></Table>
            </Row>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data () {
    return {
      userid: {
        type: ['String', 'Number'],
        required: false
      },
      orderColumns: [],
      sysUsers: []
    }
  },
  methods: {
    init () {
      if (this.$route.params.user_id) {
        this.userid = this.$route.params.user_id
      }
    }
  },
  mounted () {
    this.init()
  },
  activated () {
    this.init()
  }
}
</script>
