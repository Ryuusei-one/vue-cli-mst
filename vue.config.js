// 使用严格模式
'use strict' 

// 定义端口号
// 先加载 process.env.port ， 如果不存在， 使用 8081
const port = process.env.port  || 8081 


//  真正的配置项
//      完整配置项 https://cli.vuejs.org/config/
module.exports = {
  /**
   * 根路径 
   */
  publicPath: '/',
  outputDir: 'dist',                                 // 最终打包路径 
  assetsDir: 'static',                               // 静态资源路径
  devServer: {                                       // 开发环境配置
    port: port,                                      // 端口号
    open: true,                                      // 编译完成后，自动打开浏览器
    overlay: {                                       // 如果编译出错，是否在页面全屏显示错误
      warnings: false,                               
      errors: true
    },
  },
}