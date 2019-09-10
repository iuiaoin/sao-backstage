'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;

    router.get('/error.html', controller.common.error);
    router.get('/fail.html', controller.common.fail);
    
    router.get('/getUser', controller.common.getUser);
    router.get('/logout', controller.common.logout);

    router.get('/api/*', controller.common.proxy);
    router.post('/api/*', controller.common.proxy);
    router.delete('/api/*', controller.common.proxy);

    router.get('/*', controller.home.index);
};
