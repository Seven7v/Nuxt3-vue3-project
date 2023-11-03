<template>
  <div class="mode-home">
    <el-carousel height="900px" class="banner">
      <!-- <el-carousel-item v-for="item in bannerList" :key="item.to">
        <img :src="item.img" style="width: 100%" alt="" />
      </el-carousel-item> -->
      <el-carousel-item>
        <div class="banner banner1"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="banner banner2"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="banner banner3"></div>
      </el-carousel-item>
    </el-carousel>
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
const bannerList = [
  {
    to: '/product/introduce',
    img: 'https://pic2.zhimg.com/v2-84695046fe3f6a97c1e6868a1a43f641_r.jpg'
  },
  {
    to: '/product/introduce',
    img: 'https://pic2.zhimg.com/v2-a8055d40599528dcc84c67355dac91f1_r.jpg'
  },
  {
    to: '/product/introduce',
    img: 'https://pic1.zhimg.com/v2-c2bc308ed73d97e1c27b8be03d73781c_r.jpg'
  }
]
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
  height: 900px;
  background-size: cover;
  background-position: center;
}
.banner1 {
  background-image: url(https://pic2.zhimg.com/v2-84695046fe3f6a97c1e6868a1a43f641_r.jpg);
}
.banner2 {
  background-image: url(https://pic2.zhimg.com/v2-a8055d40599528dcc84c67355dac91f1_r.jpg);
}
.banner3 {
  background-image: url(https://pic1.zhimg.com/v2-c2bc308ed73d97e1c27b8be03d73781c_r.jpg);
}
</style>
