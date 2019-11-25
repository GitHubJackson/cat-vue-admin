<template>
  <!-- 这是左1右3布局 -->
  <div class="container">
    <div class="container-l">
      <app-sidebar class="container-sidebar" :style="{width: sidebarWidth+'px'}" :forked="forked"/>
    </div>
    <div class="container-r" :style="{marginLeft: sidebarWidth+'px'}">
      <app-header class="container-header" @changeFork="changeFork"/>
      <app-breadcrumb class="container-breadcrumb"/>
      <router-view class="container-content"/>
      <app-footer class="container-footer"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import BreadCrumb from './components/BreadCrumb'

export default {
  data () {
    return {
      sidebarWidth: 200,
      forked: false
    }
  },
  components: {
    appHeader: Header,
    appSidebar: Sidebar,
    appFooter: Footer,
    appBreadcrumb: BreadCrumb
  },
  methods: {
    changeFork (forked) {
      this.forked = forked
      this.sidebarWidth = this.forked ? 60 : 200
    }
  }
}
</script>

<style lang="less" scoped>
@header-h: 60px;
@breadcrumb-h: 36px;
.container {
  &-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    /deep/.container-t {
      height: @header-h;
    }
  }
  &-r {
    position: relative;
  }
  &-header {
    width: 100%;
    height: @header-h;
    position: fixed;
    top: 0;
  }
  &-breadcrumb {
    height: @breadcrumb-h;
    margin-top: @header-h;
  }
  &-content {
    margin: 0 16px;
    min-height: 560px;
    background-color: #fff;
    padding: 10px 20px;
  }
}
</style>
