/*jshint esversion: 6 */ 
//上面的解决es6的问题
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //解决Vue-loader在15.*之后的版本问题
module.exports = {
    entry:{ //main是默认入口,也可以是多入口
        main:'./src/main.js'
    },
    //出口
    output:{
        path: path.resolve(__dirname,'./dist'), //最好是绝对路径
        //代表当前目录的上一级的dist
        filename:'js/[name].[hash:6].js', //指定js文件
        publicPath:'/',
        
    },
    module:{
        //一样的功能 loaders:   webpack2.x之后新加的
        rules:[//require('./a.css||./a.js')
            {
             test:/\.css$/,
             use:[
                 'style-loader',
                 'css-loader'//顺序是反过来的2!1
             ]
            },
            {
                test: /\.(jpg|png|svg|ttf|woff|woff2|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096, //4096字节以上生成文件，否则base6
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test:/\.(woff|woff2|eot|otf)$/,
                use: [
                    'file‐loader'
                ]
            },
            {//处理ES6的js
                test:/\.js$/,
                loader:'babel-loader',
                //排除 node_modules下的所有
                exclude:path.resolve(__dirname,'./node_modules/'),
                include:path.resolve(__dirname,'./src/'),
                query:{
                    presets:['es2015'],//关键字
                    // plugins:['transform-runtime'],//函数
                }
            }, {//解析vue
                test:/\.vue$/,
                loader:'vue-loader',//vue-template-compiler是代码上的依赖
            }
        ]
    },

    plugins:[
        //插件的执行顺序是依次执行的
        new HtmlWebpackPlugin({
            template:'./src/index.html'
            }),
        new VueLoaderPlugin({
            template:'./src/index.html'
        })

            //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
    ],
// devServer: {
//         contentBase: path.resolve(__dirname, 'dist'),
//         host: '127.0.0.1',
//         compress: true,//服务器压缩
//         port: 8083
//     }
};
