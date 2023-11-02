<template>
  <div>
    <select v-model="$i18n.locale" @change="handleChange">
      <option value="zh">中文</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const handleChange = () => {
  const cookieLang = useCookie('lang')
  cookieLang.value = locale.value
}
</script>

<style lang="scss" scoped></style>
