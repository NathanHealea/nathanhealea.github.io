import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import jquery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(far, fab, fas);
dom.watch();

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
