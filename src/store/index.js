import Vue from 'vue';
import Vuex from 'vuex';
import login from './login-store';
import register from './register-store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login, register,
  },
});

export default store;
