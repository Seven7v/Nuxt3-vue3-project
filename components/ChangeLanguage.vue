<template>
  <div>
    <a
      href="#"
      v-for="locale in locales"
      :key="locale.code"
      @click.prevent.stop="setLocale(locale.code)"
      >{{ locale.name }}</a
    >
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
console.log('xxxxxxxxxxxxxxxxxxx', locale, locales, setLocale)

const availableLocales = computed(() => {
  console.log(locales)
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<style scoped></style>
