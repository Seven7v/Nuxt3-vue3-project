<template>
  <div class="mod-header">
    <div>
      <img src="../assets/img/logo.svg" alt="" />
      <NuxtLink to="/product" active-class="active">{{ $t('home') }} </NuxtLink>
      <change-language />
    </div>
  </div>
</template>

<script setup>
const menu = [
  {
    name: '产品中心'
  }
]
</script>

<style lang="scss" scoped></style>
