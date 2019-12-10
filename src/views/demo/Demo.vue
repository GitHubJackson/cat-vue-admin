<template>
  <div class="home">
    这是 demo 页，下面是这个页面的专属组件
    <DemoComp />
    下面是所有页面的公共组件
    <c-demo />
  </div>
</template>

<script>
import DemoComp from './components/DemoComp.vue'

export default {
  name: 'demo',
  components: {
    DemoComp
  }
}
</script>

<style lang="less" scoped>
.home {
  line-height: 36px;
}
</style>
