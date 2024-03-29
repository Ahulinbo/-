// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import store from '../src/store/index'

Vue.use(Swipe).use(SwipeItem);

Vue.use(Vant);
Vue.use(Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
