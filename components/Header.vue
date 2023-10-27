<template>
  <div class="mod-header">
    <div>
      <img src="../assets/img/logo.svg" alt="" />
      <NuxtLink v-for="m of menu" :key="m.name" :to="m.to" active-class="active">
        {{ m.name }}
      </NuxtLink>
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
</style>
