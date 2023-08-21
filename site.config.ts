import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: '云·迹的小站',
  timezone: 'Asia/Shanghai',
  url: 'https://yun.valaxy.site/',
  author: {
    avatar: 'https://s2.loli.net/2023/07/31/rJ4x98IqeFKaUgH.jpg',
    name: '云·迹',
  },
  description: '一个苦逼中学生的个人博客.',
  subtitle: 'All at sea.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
   
    {
      name: 'GitHub',
      link: 'https://github.com/future382',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/zuo-yi-zhi-nu-li-de-tu-zi-96/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
   
    {
      name: 'Twitter',
      link: 'https://twitter.com/yunji5362',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/yunji_daily',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@yunji.blog',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
    // type: 'algolia',
    type: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
    },
  },

  comment: {
    enable: true,
  },

  mediumZoom: { enable: true },

  statistics: {
    enable: true,
  },

  sponsor: {
    enable: false,
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  encrypt: {
    enable: true,
  },
})
