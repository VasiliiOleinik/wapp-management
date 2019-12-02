export default {
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    registerUser({ commit }, payload) {
      commit('SET_USER', payload);
    },
  },
  getters: {
    regUser(state) {
      return state.user;
    },
  },
};
