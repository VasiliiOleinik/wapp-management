import userService from '../_services/User-service';

const state = {
  all: {},
};

const actions = {
  getAll({ commit }) {
    commit('getAllRequest');

    userService.getAll().then(
      users => commit('getAllSuccess', users),
      error => commit('getAllFailure', error),
    );
  },

  delete({ commit }, id) {
    commit('deleteRequest', id);

    userService.delete(id).then(
      user => commit('deleteSuccess', id),
      error => commit('deleteFailure', { id, error: error.toString() }),
    );
  }
};

const mutations = {
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, users) {
    state.all = { items: users };
  },
  getAllFailure(state, error) {
    state.all = { error };
  },
  deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map((user) => {
      return user.id === id ? { ...user, deleting: true } : user;
    });
  },
  deleteSuccess(state, id) {
    state.all.items = state.all.items.filter(user => user.id !== id);
  },
  deleteFailure(state, { id, error }) {
    state.all.items = state.items.map((user) => {
      if (user.id === id) {
        const { deleting, ...userCopy } = user;
        return { ...userCopy, deleteError: error };
      }

      return user;
    });
  }
};
const users = {
  namespaced: true,
  state,
  actions,
  mutations,
};
export default users;
