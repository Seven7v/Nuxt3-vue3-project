<template>
  <div class="mod-header">
    <div>
      <NuxtLink to="/home/homePage" active-class="active"> Normal Link Home </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

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
