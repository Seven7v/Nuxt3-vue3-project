<template>
  <div class="mode-home">
    <el-carousel height="900px" class="banner">
      <!-- <el-carousel-item v-for="item in bannerList" :key="item.to">
        <img :src="item.img" style="width: 100%" alt="" />
      </el-carousel-item> -->
      <el-carousel-item v-for="(item, index) in bannerList" :key="item.to">
        <div :class="`banner banner${index + 1}`">
          <div class="banner-title">
            {{ $t(item.title) }}
            <div class="banner-desc">{{ $t(item.desc) }}</div>
            <el-button class="banner-btn" type="primary" v-if="item.btn">
              {{ $t(item.btn) }}
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <preview-card :title="$t('whatWeDo')" :content="content" />
  </div>
</template>

<script setup lang="ts">
import type { PreviewContent } from '~/types/home'
import { ref, onMounted } from 'vue'
const bannerList = [
  {
    to: '/product/introduce',
    title: 'lyberpink',
    desc: 'whyus',
    btn: 'go'
  },
  {
    to: '/product/introduce',
    title: 'newTry',
    desc: 'whyus'
  },
  {
    to: '/product/introduce',
    title: 'newTry',
    desc: 'whyus'
  }
]

const previewContent: PreviewContent = {
  img: 'https://pic3.zhimg.com/v2-06f7dd55a1df07f7c962fa95f2945532_r.jpg',
  moreList: [
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic4.zhimg.com/80/v2-ebea10b64b1275f03bdfc40e9dc76a9b_1440w.webp',
      id: 2
    },
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic4.zhimg.com/80/v2-5dae7e92968e4a3098812d2e4ee092eb_1440w.webp',
      id: 3
    },
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic1.zhimg.com/80/v2-9dbe6dcb0de181647e84a8a2135932f0_1440w.webp',
      id: 4
    },
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic2.zhimg.com/80/v2-00a687a78a1671661c5363aea8fb911d_1440w.webp',
      id: 1
    }
  ]
}
const content = ref(previewContent)
const list = ref([])
const scorll = ref(0)
// const { data } = await useFetch(
//   'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5196770',
//   {
//     headers: {
//       'X-Host': 'mall.film-ticket.film.list'
//     },
//     transform: (res: any) => res.data.films,
//     // lazy: false, // 这里默认为false 会阻塞路由渲染，（一定要等到数据请求回来后才会跳转路由）
//     lazy: true
//   }
// )
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
const handleScroll = () => {
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

<style lang="scss">
.mode-home {
  .banner {
    width: 100%;
    height: 900px;
    background-size: cover;
    background-position: center;
    &-title {
      color: #fff;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
        sans-serif;
      font-size: 60px;
      font-weight: 900;
      padding: 300px 500px;
    }
    &-desc {
      font-size: 40px;
      margin-top: 50px;
    }
    &-btn {
      margin-top: 30px;
      width: 200px;
      font-size: 48px;
      height: 60px;
    }
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
}
</style>
