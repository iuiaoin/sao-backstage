'use strict';

module.exports = function() {
    const config = {};

    config.notfound = {
        pageUrl: '/fail.html'
    };

    config.onerror = {
        errorPageUrl: '/error.html' // 重定向
    // templatePath: path.join(appInfo.baseDir, 'app/view/ERROR_500.html'), // render，模板语法 Mustache
    };

    config.cluster = {
        listen: {
            port: 9191 // 线上环境统一 9191
        }
    };

    config.proxies = {
        tomcat: {
            upstream: {
                // 配置代理的服务端
                server: [
                    '127.0.0.1'
                ],
                check: {
                    // 线上启用健康检查
                    enable: false
                }
            }
        }
    };

    config.art = {
        compileDebug: false,
        cache: true,
        minimize: true
    };

    config.openid = {
        client_id: '46afe9b06aec11e999cf246e965dfd84',
        client_secret: '6134b9ab85644461a245d908335e380246afef3c6aec11e999cf246e965dfd84'
    };

    return config;
};