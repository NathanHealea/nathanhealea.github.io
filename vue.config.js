// vue.config.js
const path = require("path");
module.exports = {
    baseUrl : process.env.NODE_ENV === 'production'
        ? '/dist/'
        : '/',

        configureWebpack: {
            resolve: {
              alias: {
                './img' : path.join(__dirname, './src/styles/img/')
              }
            }
        }
  }