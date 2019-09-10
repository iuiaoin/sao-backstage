'use strict';

module.exports = (app) => {
  class controller extends app.Controller {
    async getappName() {
      this.ctx.body = await this.ctx.service.dataSource.appName();
    }
  }
  return controller;
};
