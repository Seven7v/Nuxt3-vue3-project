<template>
  <div class="mod-header" :style="navStyle">
    <div class="menu-wrapper" ref="menuRef">
      <img src="../assets/img/logo.svg" class="logo" alt="" />
      <NuxtLink v-for="m of menu" :key="m.name" :to="m.to" active-class="active">
        {{ $t(m.name) }}
      </NuxtLink>
      <Lang />
    </div>
  </div>
</template>

<script setup>
const menu = [
  {
    name: 'home',
    to: '/home'
  },
  {
    name: 'product',
    to: '/product'
  },
  {
    name: 'about',
    to: '/about'
  },
  {
    name: 'consult',
    to: '/consult'
  }
]
const navStyle = useState('navStyle')
</script>

<style lang="scss" scoped>
.mod-header {
  width: 100%;
  position: fixed;
  .logo {
    width: 50px;
  }
  a {
    text-decoration: none;
    display: block;
    color: #fff;
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
}
</style>
