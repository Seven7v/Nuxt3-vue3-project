// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  //   页面过度
  app: {
    pageTransition: { name: 'app', mode: 'out-in' },
    // 布局过渡
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  // 反向代理
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://i.maoyan.com/api', // 这里是接口地址
        changeOrigin: true,
        prependPath: true
      }
    },
    // 该配置用于服务端请求转发 -- 这里使用时首屏加载不发请求
    routeRules: {
      '/api/**': {
        proxy: 'https://i.maoyan.com/api/**'
      }
    }
  }
})
