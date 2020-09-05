import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, val) {
      state.user = val;
      console.log("updated state", state.user);
    },
  },
  actions: {},
  modules: {},
});
