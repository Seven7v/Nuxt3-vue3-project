<template>
  <div class="mod-more-list">
    <div v-for="item of props.list" :key="item.id" class="more-item">
      <img :src="item.img" width="250" alt="" />
      <div>
        <h2>
          {{ $t(`previewCard.${item.title}`) }}
        </h2>
        <span>
          {{ $t(`previewCard.${item.desc}`) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: {}
  }
})
</script>

<style lang="scss">
.mod-more-list {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .more-item {
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(10, 10, 10, 0.15);
  }
}
</style>
