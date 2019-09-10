import { getUrlQuery } from '@/../util/tools';

export default {
    install(Vue) {
        Vue.mixin({
            beforeCreate() {
                this.$query = getUrlQuery();
            },
            data() {
                return {
                    $query: {}
                };
            }
        });
    }
};