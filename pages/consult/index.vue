<template>
  <div>资讯</div>
  <NuxtLink to="/consult/hot">Hot</NuxtLink>
  <div v-for="item of articls" @click="handleToArticle(item.id)" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const articls = ref([
  {
    id: 1,
    title: 'Nuxt 踩坑之路'
  },
  {
    id: 2,
    title: 'Nuxt 配置'
  }
])
const handleToArticle = (id: number) => {
  router.push(`/article/${id}`)
}
</script>

<style scoped></style>
