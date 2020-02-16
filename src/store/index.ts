import Vue from "vue";
import Vuex from "vuex";
import { fetchMessage } from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  mutations: {
    updateMessage(state, message) {
      console.log(`updateMessage(${message})`);
      state.message = message;
    }
  },
  actions: {
    async refreshMessage({ commit }, param) {
      console.log(`refreshMessage(${param})`);
      const message = await fetchMessage(param);
      console.log(`message=${message}`);
      commit("updateMessage", message);
    }
  },
  modules: {}
});
