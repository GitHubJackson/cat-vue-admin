<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from '@/views/layout/Layout.vue'
export default {
  components: {
    Layout
  }
}
</script>

<style lang="less">
@import './assets/style/base.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
