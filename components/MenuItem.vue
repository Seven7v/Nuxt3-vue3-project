<template>
  <div class="mod-menu">
    <el-tooltip placement="bottom">
      <template #content>
        <div class="menu-wrapper">
          <div v-for="item of props.menus" :key="item.name">
            <div>
              <NuxtLink :to="item.path">{{ $t(item.name) }}</NuxtLink>
              <div>{{ $t(item.desc) }}</div>
            </div>
          </div>
          <div>
            <img :src="current" alt="" />
          </div>
        </div>
      </template>
      <div class="title">{{ $t(props.title) }}</div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    defalut: ''
  },
  menus: {
    type: Array,
    default: []
  }
})
const current = ref('https://img95.699pic.com/photo/60045/0889.jpg_wh300.jpg')
</script>
<style lang="scss">
.mod-menu {
  .title {
    height: 80px;
    line-height: 80px;
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
      sans-serif;
  }
  .menu-wrapper {
    width: 100% !important;
    height: 600px;
  }
}
a {
  text-decoration: none;
  display: block;
  color: #fff;
  min-width: 80px;
}
.el-popper {
  width: 98vw;
  left: 0;
}
</style>
