'use strict';

module.exports = () => {
    const config = exports = {};

    config.mock = {
        port: Number(8000) + 1
    };

    config.art = {
        compileDebug: true,
        cache: false,
        minimize: false
    };

    config.proxies = {
        tomcat: {
            upstream: {
                // 配置代理的服务端
                server: [
                    'http://127.0.0.1:8080'
                ]
            }
        }
    };
    
    return config;
};
