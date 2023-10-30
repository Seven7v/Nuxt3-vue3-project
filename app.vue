<template>
  <div>
    <NuxtLayout></NuxtLayout>
  </div>
</template>
<style>
.app-enter-active,
.app-leave-active {
  transition: all 0.4s;
}
.app-enter-from,
.app-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
  transform: translateX(50px);
}
</style>
