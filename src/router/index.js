import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../pages/Auth/Login/Login.vue';
import Register from '../pages/Auth/Register/Register.vue';
import ResetPass from '../pages/Auth/ResetPass/ResetPass.vue';
import Dashboard from '../pages/Dashboard/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/reset-pass',
    name: 'resetPass',
    component: ResetPass,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
