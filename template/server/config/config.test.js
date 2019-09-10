'use strict';

module.exports = function() {
    const config = exports = {};

    config.addressing = {
        catchErrorOnStarting: true
    };

    config.proxies = {
        tomcat: {
            upstream: {
                // 配置代理的服务端
                server: [
                    'http://127.0.0.1'
                ]
            }
        }
    };

    config.httpclient = {
        request: {
            timeout: 30000
        }
    };

    config.disconf = {
        webHost: 'disconf-test-kl.service.163.org'
    };

    return config;
};
