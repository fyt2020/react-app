

const path = require('path')

module.exports = {
   //是否打包sourcemap
   productionSourceMap:false,

   //设置输出目录
   outputDir:'myDist',
  
   //项目上线的资源所在地
   publicPath:'./',
  //  publicPath:process.env.NODE_ENV === 'production' ? '/' :'./',

   runtimeCompiler: true,

   //静态资源路径 将所有资源放到一个文件中
   assetsDir:'assets',

   chainWebpack:config =>{
       config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'))
   },

   //    configureWebPack:{//跟正常配置webpack一样

   //    },
   devServer:{
     proxy:{
        '/api/chat/sendMsg':{
            target:'http://api.duyiedu.com',
        }
     }
   },

   pluginOptions: {
     'style-resources-loader': {
       preProcessor: 'less',
       patterns: [
           path.resolve(__dirname,'src/assets/style/abs.less')
       ]
     }
   }
}
