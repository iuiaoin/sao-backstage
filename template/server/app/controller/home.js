'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async hi() {
        this.ctx.body = 'hello world';
    }
    async index() {
        const { ctx } = this;
        const viewPath = path.join(__dirname, '../public/index.html');
        
        ctx.set('Content-Type', 'text/html');
        ctx.body = fs.createReadStream(viewPath);
    }
}

module.exports = HomeController;
