<template>
  <div class="container">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item
        v-for="(item, index) in path"
        :key="index"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </el-breadcrumb-item> -->
      <el-breadcrumb-item to="/">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ $route.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  margin: 0 16px;
  padding: 0 20px;
}
</style>
