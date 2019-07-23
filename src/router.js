import Vue from 'vue';
import Router from 'vue-router';
import * as about from './modules/about';
import * as mp from './modules/mp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...mp.routers,
    ...about.routers,
  ],
});
