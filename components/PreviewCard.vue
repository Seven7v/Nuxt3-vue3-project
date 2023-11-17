<template>
  <div class="mod-preview-card">
    <div class="card">
      <h2>{{ props.title }}</h2>
      <div class="card-content">
        <div class="card-left" v-if="props.content.img || props.content.video">
          <img :src="props.content.img" class="card-media" />
        </div>
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
    }
    &-media {
      max-width: 1100px;
      border-radius: 10px;
    }
  }
}
</style>
