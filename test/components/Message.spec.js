import { mount } from '@vue/test-utils'
import Message from '~/components/Message/Message'

describe('message component', () => {
  const wrapper = mount(Message, {
    propsData: {
      setText
    }
  })
  it('can be mounted', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
