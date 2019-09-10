import Vue from 'vue';
import Element from 'element-ui';
import plugin from '@/plugin';

import '@/theme/index.css';
import '@/style/fonts.less';

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(plugin);

// const { getUser } = require('./api/common');
export default async function( ctx ) {
    // const { username, email } = await getUser();
    // ctx.user = {
    //     nickname: username,
    //     email
    // };

    window.user = ctx.user || {};

    ctx.events.on( 'layout:logout', () => {
        window.location.href = '/logout';
    });
}
