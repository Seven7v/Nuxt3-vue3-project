<template>
  <div>
    <div class="banner">banner页面</div>
    <div v-for="item of data" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ref([])
// const { data } = await useAsyncData(
//   'film-list',
//   () =>
//     $fetch('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5196770', {
//       headers: {
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     }),
//   {
//     // pick: ['data']
//     transform: (res: any) => res.data.films,
//     // lazy: false, // 这里默认为false 会阻塞路由渲染，（一定要等到数据请求回来后才会跳转路由）
//     lazy: true // 不会阻塞路由跳转，但是会导致跳转后无数据，需要通过watch监听数据后赋值
//   }
// )
const { data } = await useFetch(
  'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5196770',
  {
    headers: {
      'X-Host': 'mall.film-ticket.film.list'
    },
    transform: (res: any) => res.data.films,
    // lazy: false, // 这里默认为false 会阻塞路由渲染，（一定要等到数据请求回来后才会跳转路由）
    lazy: true // 不会阻塞路由跳转，但是会导致跳转后无数据，需要通过watch监听数据后赋值
  }
)
// list.value = data.value

// watch(data, () => {
//   list.value = data.value
// })
// console.log(data)
</script>

<style scoped>
.banner {
  width: 100%;
  height: 600px;
  background: #dedede;
}
</style>
