import { mount } from '@vue/test-utils'
import login from '~/pages/login.vue'

describe('login', () => {
  const wrapper = mount(login)
  it('can be mounted', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has title', () => {
    expect(wrapper.find('#title').text()).toEqual('login')
  })
  it('should render a login form', () => {
    const loginForm = wrapper.contains('form')
    expect(loginForm).toBeTruthy()
  })
})
