<template>
  <div class="mod-header">
    <div>
      <img src="../assets/img/logo.svg" alt="" />
      <div class="menu-wrapper">
        <NuxtLink v-for="m of menu" :key="m.name" :to="m.to" active-class="active">
          {{ m.name }}
        </NuxtLink>
        <select>
          <option value="zh-cn">中文</option>
          <option value="en-us">English</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = [
  {
    name: '首页',
    to: '/home'
  },
  {
    name: '产品中心',
    to: '/product'
  },
  {
    name: '关于我们',
    to: '/about'
  },
  {
    name: '资讯',
    to: '/consult'
  }
]
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: block;
  color: #000;
  min-width: 80px;
}
.active {
  border-bottom: 2px solid #000;
}
.menu-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
