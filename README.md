# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## template

可以通过下载 template 分支内容，得到一个配置完整的 Nuxt 项目。

```
|--pages
    |--home
        |--homePage.vue
    |--home.vue
|--components
    |-- Header.vue
|--layouts
    |-- default.vue
    |-- notab.vue
|--middleware
    |-- redirect.global.ts
```

已经配置好了路由重定向

```
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/' || to.fullPath === '/home') {
    return navigateTo('/home/homePage')
  }
})

```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

```bash
# npm
npm run dev

```

## Production

Build the application for production:

使用 nuxt 实现一个官网的 demo 样式，

````bash
# npm
npm run build



Locally preview production build:

```bash
# npm
npm run preview


````

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
