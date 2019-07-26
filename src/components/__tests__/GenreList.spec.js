import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GenreList from '@/components/GenreList.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('GenreList.vue', () => {
  let wrapper
  let store
  let state
  let getters

  beforeEach(() => {
    state = {
      genres: [
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
      ],
    },
  
    getters = {
      getGenres: () => {
        return state.genres
      }
    },
  
    store = new Vuex.Store({
      getters
    })
  
    wrapper = shallowMount(GenreList, {
      propsData: {
        genreIds: [28, 16]
      },
      store,
      localVue
    })
  })

  it ('check if genres are loaded from getters', () => {
    expect(wrapper.vm.genres.length).toBe(3)
  })

  it ('check if method converts ids being used to actual genre propery', () => {
    expect(wrapper.vm.convertIdToGenre).toEqual([ 
      { id: 28, name: 'Action' }, 
      { id: 16, name: 'Animation' } 
    ])
  })

})
