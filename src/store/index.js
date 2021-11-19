import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: true,
    countries: [],
  },
  mutations: {
    SWITCH_THEME(state) {
      state.isDark = !state.isDark
    },
    GET_ALL_COUNTRIES(state, payload) {
      state.countries = payload
    },
  },
  actions: {
    switchTheme({ commit }) {
      commit('SWITCH_THEME')
    },
    async getAllCountries({ commit }) {
      try {
        const response = await axios.get('https://restcountries.com/v2/all')
        commit('GET_ALL_COUNTRIES', response.data)
      } catch (error) {
        console.log(error.message)
      }
    },
  },
  modules: {},
})
