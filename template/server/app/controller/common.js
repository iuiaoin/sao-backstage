'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
    async fail() {
        await this.ctx.render('ERROR_404.html');
    }
    async error() {
        await this.ctx.render('ERROR_500.html');
    }
    async proxy() {
        let user = this.ctx.session.userInfo || { email: 'NULL' };
        const proxyCtx = this.ctx.proxyPass('tomcat', {
            headers: {
                email: user.email
            }
        });
        await proxyCtx.response();        
    }
    async getUser() {
        const {
            ctx
        } = this;
        let user = ctx.session.userInfo;

        if (user && user.email) {
            ctx.body = {
                code: 200,
                data: {
                    username: user.fullname,
                    nickname: user.nickname,
                    email: user.email
                }
            };
        } else {
            ctx.body = {
                code: 500,
                desc: '未获取到用户信息'
            };
        }
    }
    logout() {
        delete this.ctx.session.userInfo;
        
        if (this.ctx.acceptJSON) {
            this.ctx.json('/');
        } else {
            this.ctx.redirect('/');
        }
    }
}

module.exports = CommonController;
