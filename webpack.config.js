const webpack = require('webpack')

const path = require('path')
const ROOT_PATH = path.resolve(__dirname)
const MODULES_PATH = path.join(ROOT_PATH, './node_modules')


const getEntryName = () => {
    
}

module.exports = {
    context: ROOT_PATH,
    entry: {

    },
    output: {

    },
    resolve: {
        extensions: ['', 'js', 'jsx', 'coffee']
    },
    module: {
        loaders: [

        ],
    },
    plugins: [

    ],
}