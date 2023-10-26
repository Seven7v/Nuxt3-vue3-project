import zh from './zh'
import en from './en'

const i18n = {
  locale: 'zh',
  //有多少地区的语言就添加多少种
  defaultLocale: 'zh', //默认的地区语言
  vueI18n: [
    {
      fallbackLocale: 'zh', //回退策略，指定的locale中没有找到对应资源的情况下使用的locale
      messages: {
        //要渲染的信息，有多少语言就添加多少种
        en: en,
        zh: zh
      },
      locales: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'zh',
          name: '简体中午'
        }
      ]
    }
  ]
}

export default i18n
