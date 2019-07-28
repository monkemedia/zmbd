import Vue from 'vue'
import Vuex from 'vuex'
import { state, actions, mutations } from '@/store.js'
Vue.use(Vuex)
jest.mock('@/services/ApiService.js')

describe('actions', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      mutations,
      actions: {
        fetchGenres: actions.fetchGenres
      }
    })
  })

  it('genre list is added to state', async () => {
    await store.dispatch('fetchGenres')
    expect(store.state.genres).toEqual([
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 12,
        name: 'Adventure'
      },
      {
        id: 16,
        name: 'Animation'
      }
    ])
  })

  it('genre ids are added to state', async () => {
    await store.dispatch('fetchGenres')
    expect(store.state.genreFilter).toEqual([28, 12, 16])
  })
})
