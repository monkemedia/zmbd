import { shallowMount } from '@vue/test-utils'
import MovieStub from '@/components/MovieStub.vue'

describe('MovieStub.vue', () => {
  let wrapper


  beforeEach(() => {
    wrapper = shallowMount(MovieStub, {
      propsData: {
        movie: {
          genre_ids: [12],
          id: 420818,
          original_title: 'The Lion King',
          overview: 'Simba idolises his father',
          poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          release_date:'2019-07-12',
          title: 'The Lion King',
          vote_average: 7.2
        }
      }
    })
  })

  it ('movieYear - Computed property converts relate date to year only - YYYY', () => {
    expect(wrapper.vm.movieYear).toBe('2019')
  })

  it ('truncateOverview - computed property will only apply truncation if string is equal or longer than `truncateLength` property', () => {
    expect(wrapper.vm.truncateOverview).toBe('Simba idolises his father')
    wrapper.setData({ truncateLength: 10 })
    expect(wrapper.vm.truncateOverview).toBe('Simba idol...')
  })

})
