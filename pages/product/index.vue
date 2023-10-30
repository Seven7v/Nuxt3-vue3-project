<template>
  <div>
    产品中心

    <div v-for="item of data" :key="item.id">
      {{ item.nm }}
    </div>
  </div>
</template>

<script setup lang="ts">
// 这里有个问题啊，如果配置了内容，导致页面最开始时空的，但是并没有发起请求，最开始？为什么
// const { data } = await useLazyFetch(
//   '/api/mmdb/movie/v3/list/hot.json?ct=%E6%88%90%E9%83%BD&ci=59&channelId=4',
//   {
//     baseURL: process.server ? 'https://i.maoyan.com/' : '',
//     transform: (res: any) => res.data.hot
//   }
// )
const { data } = await useLazyFetch(
  '/api/mmdb/movie/v3/list/hot.json?ct=%E6%88%90%E9%83%BD&ci=59&channelId=4',
  {
    // baseURL: process.server ? 'https://i.maoyan.com/' : '',
    transform: (res: any) => res.data.hot
  }
)
console.log(new Date(), data)
</script>

<style scoped></style>
