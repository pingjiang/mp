export const moduleName = 'about';
export const moduleTitle = 'About';

export const routers = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
  },
];
