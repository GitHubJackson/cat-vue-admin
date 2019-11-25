<template>
  <div class="container">
    <div class="container-t">
      <img src="@/assets/image/logo.png">
      <span v-show="!forked">后台管理系统</span>
    </div>
    <ul class="container-c">
      <li
        :key="index"
        v-for="(item, index) in menus"
      >
        <div
          class="menu-item"
          :class="{'menu-item-selected': $store.state.sideBarSelected === index}"
          :style="{'justify-content': forked ? 'center' : 'normal'}"
          @click="selectSideBar(index, item.router)"
        >
          <i :class="item.icon"></i>
          <span v-show="!forked">{{ item.name }}</span>
        </div>
        <ul v-show="item.children">
          <li
            v-for="(item_c, index_c) in item.children"
            :key="index_c"
            class="menu-item-children"
            v-show="$store.state.sideBarSelected === index"
          >
            <span>{{ item_c.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['forked'],
  data () {
    return {
      menus: [
        {
          icon: 'el-icon-user',
          name: '用户管理',
          router: '/user'
        },
        {
          icon: 'el-icon-document',
          name: '内容管理',
          router: '/content'
          // children: [
          //   {
          //     name: '标签管理'
          //   }
          // ]
        }
      ]
    }
  },
  methods: {
    // 改变侧边栏选中项
    selectSideBar (index, router) {
      this.$store.commit('updateSidebarSelected', index)
      this.$router.push(router)
    }
  }
}
</script>

<style scoped lang="less">
.container {
  color: #fff;
  background-color: #001529;
  &-t {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #002140;
    img {
      width: 24px;
      height: 24px;
    }
    span {
      font-size: 18px;
      margin-left: 16px;
    }
  }
  &-c {
    .menu-item {
      color: #ccc;
      display: flex;
      align-items: center;
      padding: 0 26px;
      cursor: pointer;
      height: 50px;
      &-children {
        color: #ccc;
        display: flex;
        align-items: center;
        padding: 0 58px;
        cursor: pointer;
        height: 50px;
        &:hover {
          color: #fff;
        }
      }
      &-selected {
        color: #fff;
        background-color: #1890FF;
      }
      &:hover {
        color: #fff;
      }
      i {
        font-size: 16px;
      }
      span {
        margin-left: 16px;
        font-size: 16px;
      }
    }
  }
}
</style>
