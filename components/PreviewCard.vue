<template>
  <div class="mod-preview-card">
    <div class="card">
      <div>{{ props.title }}</div>
      <div class="card-content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    defalut: ''
  }
})
</script>

<style lang="scss">
.mod-preview-card {
  background: linear-gradient(#393939, #022043);
  padding: 50px;
  .card {
    width: 900px;
    margin: 0 auto;
  }
  .card-content {
    height: 600px;
  }
}
</style>
