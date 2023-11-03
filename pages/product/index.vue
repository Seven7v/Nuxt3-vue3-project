<template>
  <div>
    产品中心
    <div v-for="item of data" :key="item.id">
      {{ item.nm }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useLazyFetch(
  '/api/mmdb/movie/v3/list/hot.json?ct=%E6%88%90%E9%83%BD&ci=59&channelId=4',
  {
    baseURL: process.server ? 'https://i.maoyan.com/' : '',
    transform: (res: any) => res.data.hot
  }
)
console.log(new Date(), data)
</script>

<style scoped></style>
