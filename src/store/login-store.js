export default {
  state: {
    user: {},
  },
  mutations: {
    CHECK_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    loginUser({ commit }, payload) {
      commit('CHECK_USER', payload);
    },
  },
  getters: {
    loginUser(state) {
      return state.user;
    },
  },
};
