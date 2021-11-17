import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false,
  },
  mutations: {
    SWITCH_THEME(state) {
      state.isDark = !state.isDark
    },
  },
  actions: {
    switchTheme({ commit }) {
      commit('SWITCH_THEME')
    },
  },
  modules: {},
})
