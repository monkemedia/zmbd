import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/ApiService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genres: [],
    genreFilter: [],
    userRatingFilter: [0, 10]
  },

  mutations: {
    SET_GENRES (state, payload) {
      state.genres = payload
    },

    SET_GENRE_FILTER (state, payload) {
      state.genreFilter = payload
    },

    SET_USER_RATING_FILTER (state, payload) {
      state.userRatingFilter = payload
    }
  },

  actions: {
    async fetchGenres ({ commit }) {
      let response

      try {
        response = await ApiService.genreList()
        commit('SET_GENRES', response.genres)

        const idsOnly = response.genres.map(pay => {
          return pay.id
        })
        commit('SET_GENRE_FILTER', idsOnly)

      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {
    getGenres (state) {
      return state.genres
    },

    getGenreFilters (state) {
      return state.genreFilter
    },

    getUserRatingFilters (state) {
      return state.userRatingFilter
    }
  }
})
