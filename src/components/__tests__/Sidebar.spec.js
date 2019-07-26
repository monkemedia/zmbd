import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  let wrapper


  beforeEach(() => {
    wrapper = shallowMount(Sidebar)
  })

  it ('clicking on button toggles filter menu', () => {
    const button = wrapper.find('.button')

    wrapper.setData({ toggleFilters: false })
    button.trigger('click')

    expect(wrapper.vm.toggleFilters).toBe(true)

    button.trigger('click')
    
    expect(wrapper.vm.toggleFilters).toBe(false)
  })

})
