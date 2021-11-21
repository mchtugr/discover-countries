import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false,
    countries: [],
    region: 'All',
  },
  mutations: {
    SWITCH_THEME(state) {
      state.isDark = !state.isDark
    },
    GET_ALL_COUNTRIES(state, payload) {
      state.countries = payload
    },
    SEARCH_COUNTRIES(state, payload) {
      state.countries = payload
    },
    FILTER_REGION(state, payload) {
      state.region = payload
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

    async searchCountries(context, country) {
      axios
        .get(`https://restcountries.com/v2/name/${country}`)
        .then((res) => {
          //if no country available, api still returns 200,
          if (res.data.status === 404) {
            context.commit('SEARCH_COUNTRIES', [])
          } else {
            context.commit('SEARCH_COUNTRIES', res.data)
          }
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
    filterRegion(context, region) {
      context.commit('FILTER_REGION', region)
    },
  },
  modules: {},
})
