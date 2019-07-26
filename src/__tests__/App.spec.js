import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from '@/App.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('App.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      fetchGenres: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })
  
    shallowMount(App, {
      store,
      localVue,
      router
    })
  })

  it('dispatches `fetchGenres` on mounted', () => {
    expect(actions.fetchGenres).toHaveBeenCalled()
  })
})
