<template>
  <div>
    {{ processData }}
  </div>
</template>

<style scoped>
  
</style>

<script>
  export default {
    data() {
      return {

      }
    },
    props:{
      row: Object
    },
    computed: {
      processData () {
        return this.row.roleName +'的菜单资源'
      } 
    }
  }
</script>