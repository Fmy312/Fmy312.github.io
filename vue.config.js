const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('components',resolve('./src/components'))
            .set('views',resolve('./src/views'))
            .set('assets',resolve('./src/assets'))
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('network',resolve('./src/network'))
            .set('common',resolve('./src/common'))
    },
    lintOnSave: false,
        lintOnSave: false,
        devServer: {
            host: '10.7.120.131', // ip
            port: 8081, // 设置端口号
            https: false, // https:{type:Boolean}
            open: false, //配置自动启动浏览器
            proxy:null  //设置代理
        }
}

// vue.config.js


