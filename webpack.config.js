const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        filename:'script.js', //por padrão é main.js
        path: path.resolve(__dirname, 'dist/assets/js') //por padrão a pasta é dist
    },
    mode:'development',
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[ 'style-loader', 'css-loader' ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[ 
                    {
                        loader: 'file-loader',
                        options:{
                            name: '../images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[ 'style-loader', 'css-loader', 'sass-loader' ]
            }

        ]
    }
};