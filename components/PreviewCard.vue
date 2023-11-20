<template>
  <div class="mod-preview-card">
    <div class="card">
      <h2>{{ props.title }}</h2>
      <div class="card-content">
        <div
          class="card-left"
          :style="{
            backgroundImage: 'url(' + props.content.img + ')',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }"
          v-if="props.content.img || props.content.video"
        ></div>
        <div class="card-right" v-if="props.content.consultList"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    defalut: ''
  },
  content: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss">
.mod-preview-card {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  color: #fff;
  background: linear-gradient(#393939, #022043);
  padding: 50px;
  .card {
    width: 1400px;
    margin: 0 auto;
    &-content {
      padding-top: 20px;
      height: 600px;
      display: flex;
    }
    &-left {
      max-width: 1100px;
      border-radius: 10px;
      height: 100%;
    }
  }
}
</style>
