'use strict';
const path = require('path');
const { getEnv, adapters } = require('@kapp/disconf-toolkit');

module.exports = function(appInfo) {
    const disconfEnv = getEnv(appInfo);

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = `${appInfo.name}_1554901614555_4789`;

    // add your config here
    config.middleware = [];

    config.static = {
        prefix: '',
        dir: path.join(appInfo.baseDir, 'app/public'),
        dynamic: true,
        preload: false,
        buffer: true
    };

    config.siteFile = {
        '/favicon.ico': 'https://haitao.nos.netease.com/25ab9d19-4fba-4ef7-8907-e8ff22a64fe4.ico'
    };

    config.view = {
        defaultViewEngine: 'art',
        root: [
            path.join(appInfo.baseDir, 'app/view')
        ].join(',')
    };

    config.security = {
        csrf: {
            enable: false
        }
    };

    config.view = {
        defaultViewEngine: 'art',
        root: [
            path.join(appInfo.baseDir, 'app/view')
        ].join(',')
    };
       
    config.art = {
        imports: require('../app/helper'),
        writeResp: true,
        debug: false,
        htmlMinifierOptions: {
            collapseWhitespace: true,
            minifyCSS: false,
            minifyJS: false,
            // 运行时自动合并：rules.map(rule => rule.test)
            ignoreCustomFragments: []
        }
    };

    config.proxies = {
        tomcat: {
            // 统一设置代理时的 headers
            // 类似于 proxy_set_header Host 'goods.kaola.com'
            // 不填会使用当前 node 应用获取到的 Host 值
            headers: {
                host: 'athena-kl.service.163.org'
            },
            // 类似 Nginx Upstream 概念，用来管理代理的服务端
            upstream: {
                // 配置代理的服务端
                // server: [
                // 可直接传入 Host，如 ["goods.kaola.com"]
                // 'athena-kl.netease.com'
                // ],
                // 健康检查
                check: {
                    // 是否启用健康检查
                    enable: false,
                    // 健康检查的路径
                    path: '/health/status',
                    // 健康检查间隔
                    interval: '5s'
                },
                // 负载均衡的类型
                // 可选值 ['Random', 'RoundRobin']
                loadBalancerType: 'Random'
            }
        }
    };

    // config.addressing = {
    //     zkHosts: void 0,
    //     catchErrorOnStarting: false,
    //     timeout: 5000,
    //     webServers: {
    //         tomcat: {
    //             application: '',
    //             env: appInfo.serverEnv
    //         }
    //     }
    // };


    config.disconf = {
        groups: [
            {
                type: 'normal',
                name: 'trace_config',
                env: disconfEnv.normal,
                adapter: adapters.trace({
                    percent: `kaola#${appInfo.name}_sample_rate`
                })
            }, {
                type: 'normal',
                name: 'node_grayscale_config',
                env: disconfEnv.normal,
                adapter: adapters.grayscale({
                    name: `${appInfo.name.replace(/^kaola\-/, '').replace(/\-fed/, '')}_gc`
                    // 填写 UCC 上 `node_grayscale_config` 配置项内的 key，如 tradecenter_gc 或者 mykaola_gc
                })
            }, {
                type: 'rate-limiter',
                application: appInfo.name,
                env: disconfEnv.normal,
                adapter: adapters.rateLimiter()
            }, {
                // 使用 disconf 动态分组 `node_zkhosts` 来管理 `addressing` 配置
                type: 'normal',
                name: 'node_zkhosts',
                env: disconfEnv.normal,
                adapter: adapters.zkHosts('addressing')
            }
        ]
    };

    config.httpclient = {
        enableDNSCache: false
    };

    config.cluster = {
        listen: {
            port: Number('8000')
        }
    };

    config.openid = {
        client_id: '64d291ea6aec11e9b335246e965dfd84',
        client_secret: '24e3d4ef4e9a422bbfd0fb30689aafb264d296c26aec11e9b335246e965dfd84'
    };

    return config;
};
