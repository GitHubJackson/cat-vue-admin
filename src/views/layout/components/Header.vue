<template>
  <div class="container">
    <div class="container-l">
      <i :class="!forked ? 'el-icon-s-fold' : 'el-icon-s-unfold'" class="fork" @click="changeFork"></i>
    </div>
    <div class="container-r">
      <i class="el-icon-switch-button"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forked: false
    }
  },
  methods: {
    changeFork () {
      this.forked = !this.forked
      this.$emit('changeFork', this.forked)
    }
  }
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 1px 1px #ccc;
  &-l {
    .fork {
      margin-left: 20px;
      font-size: 24px;
      cursor: pointer;
      &:hover {
        color: #1890FF;
      }
    }
  }
}
</style>
