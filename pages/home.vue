<template>
  <div class="mode-home">
    <div class="banner">banner页面</div>
    <div v-for="item of data" :key="item.name">
      {{ item.name }}
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ item.name }}</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        {{ item.name }}
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const list = ref([])
const scorll = ref(0)
const { data } = await useFetch(
  'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5196770',
  {
    headers: {
      'X-Host': 'mall.film-ticket.film.list'
    },
    transform: (res: any) => res.data.films,
    // lazy: false, // 这里默认为false 会阻塞路由渲染，（一定要等到数据请求回来后才会跳转路由）
    lazy: true
  }
)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
const handleScroll = () => {
  console.log('进入')
  scorll.value = document.documentElement.scrollTop || document.body.scrollTop
  const navStyle = useState('navStyle')
  if (scorll.value > 100) {
    navStyle.value = {
      backgroundColor: '#000'
    }
  } else {
    navStyle.value = {
      backgroundColor: 'transparent'
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 600px;
  background: #3c393c;
}
</style>
