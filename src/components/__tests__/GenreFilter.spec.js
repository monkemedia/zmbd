import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import GenreFilter from '@/components/GenreFilter.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('GenreFilter.vue', () => {
  let wrapper
  let store
  let state
  let mutations
  let getters

  beforeEach(() => {
    state = {
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id:12,
          name: 'Adventure'
        },
        {
          id:16,
          name: 'Animation'
        }
      ],

      genreFilter: [28, 12, 16]
    },
  
    getters = {
      getGenres: () => {
        return state.genres
      },

      getGenreFilters: () => {
        return state.genreFilter
      }
    },

    mutations = {
      SET_GENRE_FILTER: jest.fn()
    },
  
    store = new Vuex.Store({
      getters,
      mutations
    })
  
    wrapper = shallowMount(GenreFilter, {
      store,
      localVue,
      router
    })
  })

  it ('on mounted add filters to data property', () => {
    expect(wrapper.vm.genres.length).toBe(3)
  })

  it ('on mounted print a list of genre inputs', () => {
    expect(wrapper.html()).toContain('<li class="field"><input id="genre-28" type="checkbox" class="is-checkradio is-dark" value="28"> <label for="genre-28" class="label">Action</label></li>')
  })

  it ('on mounted get genre filters', () => {
    expect(wrapper.vm.genreFilter).toEqual([28, 12, 16])
  })

})
