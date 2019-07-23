export const moduleName = 'mp';
export const moduleTitle = 'MediaPlatform';

export const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "mp" */ './views/Home.vue'),
  },
  {
    path: '/post',
    name: 'mp/post',
    component: () => import(/* webpackChunkName: "mp" */ './views/PostArticle.vue'),
  },
  {
    path: '/articles',
    name: 'mp/list',
    component: () => import(/* webpackChunkName: "mp" */ './views/List.vue'),
  },
  {
    path: '/media',
    name: 'mp/media',
    component: () => import(/* webpackChunkName: "mp" */ './views/Medias.vue'),
  },
];
