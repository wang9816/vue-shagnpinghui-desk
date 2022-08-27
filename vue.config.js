module.exports = {
    lintOnSave:false,
    devServer:{
        host:'127.0.0.1',
        port: 8888,
        proxy:{
            '/api': {
                target:'http://gmall-h5-api.atguigu.cn',

                changeOrigin:true
            }
        }
    }
}