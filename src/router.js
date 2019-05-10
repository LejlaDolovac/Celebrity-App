import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Celeb',
      component: () => import('./views/Celeb.vue')
    },
    {
      path: '/newCeleb',
      name: 'newCeleb',
      component: () => import('./views/newCeleb.vue')
    }
  ]
});
