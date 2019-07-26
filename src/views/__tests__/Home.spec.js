import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

localVue.use(Vuex)

jest.mock('@/services/ApiService.js')

describe('App.vue', () => {
  let wrapper
  let store
  let state
  let actions
  let getters

  beforeEach(() => {
    actions = {
      fetchGenres: jest.fn()
    },

    store = new Vuex.Store({
      actions,
      getters
    })
  
    wrapper = shallowMount(Home, {
      methods: {
        genreFilterHandler: jest.fn(),
        userRatingFilterHandler: jest.fn()
      },
      store,
      localVue
    })
  })

  it('on mounted we fetch `now playing movies` from the API', async () => {
    await flushPromises()
    expect(wrapper.vm.movies.length).toBe(3)
  })

  it ('movies are filtered when users filter genres', async () => {    
    state = {
      genreFilter: [12],
      userRatingFilter: [4, 5]
    }
    getters = {
      getGenreFilters: () => {
        return state.genreFilter
      },
      getUserRatingFilters: () => {
        return state.userRatingFilter
      }
      
    }

    store = new Vuex.Store({
      actions,
      getters
    })

    wrapper = shallowMount(Home, {      
      store,
      localVue
    })

    await flushPromises()
    wrapper.vm.genreFilterHandler()

    expect(wrapper.vm.filteredMovies.length).toBe(2)
  })

  it ('movies are filtered when users filter user ratings', async () => {    
    state = {
      genreFilter: [12],
      userRatingFilter: [4, 5]
    }
    getters = {
      getGenreFilters: () => {
        return state.genreFilter
      },
      getUserRatingFilters: () => {
        return state.userRatingFilter
      }
    }

    store = new Vuex.Store({
      actions,
      getters
    })

    wrapper = shallowMount(Home, {      
      store,
      localVue
    })

    await flushPromises()
    wrapper.vm.userRatingFilterHandler()

    expect(wrapper.vm.filteredMovies.length).toBe(2)
  })
})
