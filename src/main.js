import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import './styles/app.scss';

Vue.config.productionTip = true;

Vue.use(Element, {
  size: 'medium',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
