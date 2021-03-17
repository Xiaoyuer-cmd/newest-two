const path = require('path'); //引入path的依赖
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离CSS

module.exports = {
    entry: './src/main.js', //配置入口信息
    output: {
        path: path.resolve(__dirname, 'build'), //配置出口信息,即文件打包后的存放路径
        filename: 'script/bundle.js', //存放文件的名称
        publicPath: '/', //指定url图片资源访问路劲
    },
    devServer: {
        contentBase: './build', //设置服务器访问的基本目录
        host: 'localhost', //配置服务器的IP地址
        port: 9091, //端口
        open: true, //自动打开页面
        hot: true, //模块热替换
        inline: true, //自动刷新
        historyApiFallback: true, //无刷新更改地址栏, 可解决路由刷新
        // progress: true, //打包进度条
        lazy: false, //不启动懒加载
        quiet: false, //控制台中不输出打包的信息
        bonjour: true, //用于在启动时通过 ZeroConf 网络广播你的开发服务器
        clientLogLevel: 'silent', //关闭输出日志
        hotOnly: true, //启用热模块替换
        liveReload: false, //默认情况下， 检测到文件更改时， 开发服务器将重新加载 / 刷新页面
        watchOptions: {
            aggregateTimeout: 300
        },
        proxy: {
            '/api': {
                target: 'http://www.baidu.com/', // 目标服务器地址
                pathRewrite: { '^/api': '' }, // 将/api开头的请求地址, /api 改为 /, 即 /api/xx 改为 /xx
                changeOrigin: true, // target是域名的话，需要这个参数，
                secure: false, // 设置支持https协议的代理
            },
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'] //分离CSS
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { //ES6转化
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { //for=>vue
                test: /\.(vue)$/,
                use: 'vue-loader'
            },
            { //配置样式和页面中引入的photo=>loader
                test: /\.(png|svg|jpg|gif|woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    options: { //配置photo的选项
                        name: '[name].[ext]?[hash:8].jpg',
                        limit: 81920,
                        outputPath: 'images', // 设置outputPath，即将图片存放到XXXX文件夹
                        /*
                        name:'[path]timg.jpg',//图片名称  //[path]为打包后会自动生成文件夹存放图片
                        name:'[hash]timg.jpg',// 设置[hash]
                        context:'/',// 设置context，即是配置打包后图片的存放路径
                        publicPath:'www.baidu.com',// 设置publicPath，即将图片发布到某个网站
                        */
                    }
                }]
            },
        ]
    },
}