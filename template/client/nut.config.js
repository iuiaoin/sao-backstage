const path = require('path');

module.exports = {
  zh: 'xx平台',
  en: '',
  port: 3000,
  html: {
    title: '',
    favicon: './favicon.png',
    template: path.join(__dirname, 'src/index.ejs'),
    env: process.env.MODE
  },
  layout: 'kaola',
  sidebar: [
  {
    title: 'test',
    icon: 'team',
    children: [
      { title: 'demo', path: 'pages/demo/index' },
    ]
  }],
  configureWebpack: {
    resolve: {
      alias: {}
    }
  },
  devServer: {
    proxy: {
      '/api': 'http://127.0.0.1:7000' // local
    },
    disableHostCheck: true
  }
}