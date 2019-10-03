import { mount } from '@vue/test-utils'
import LoginForm from '~/components/Login/LoginForm'

describe('login structure', () => {
  const wrapper = mount(LoginForm)
  it('can be mounted', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has a form', () => {
    expect(wrapper.contains('form')).toBeTruthy()
  })
  it('has a username', () => {
    expect(wrapper.contains('#username')).toBeTruthy()
  })
  it('has a password', () => {
    expect(wrapper.contains('#password')).toBeTruthy()
  })
  it('has a submit', () => {
    expect(wrapper.contains('#submit')).toBeTruthy()
  })
})

describe('login functionalities', () => {
  const handleFormSubmit = jest.fn()
  const wrapper = mount(LoginForm, {
    propsData: {
      handleFormSubmit
    }
  })
  it('should call the passed function when the form is submitted', () => {
    wrapper.find('form').trigger('submit')
    expect(handleFormSubmit.mock.calls).toHaveLength(1)
  })
  it('should update model when trigger username input', () => {
    const input = wrapper.find('#username')
    input.setValue('hello')
    expect(wrapper.vm.$data.username).toEqual('hello')
  })
  it('should update model when trigger password input', () => {
    const input = wrapper.find('#password')
    input.setValue('password')
    expect(wrapper.vm.$data.password).toEqual('password')
  })
})

describe('input username and password are required', () => {
  const handleFormSubmit = jest.fn()
  const wrapper = mount(LoginForm, {
    propsData: {
      handleFormSubmit
    }
  })
  it('should not submit the form if username is empty', () => {
    wrapper.find('#username').setValue(null)
    expect(wrapper.vm.isFormValid).toBeFalsy()
  })
  it('should not submit the form if username is empty', () => {
    wrapper.find('#password').setValue(null)
    expect(wrapper.vm.isFormValid).toBeFalsy()
  })
  it('should compute valid true if username and password are not null', () => {
    wrapper.find('#username').setValue('username')
    wrapper.find('#password').setValue('password')
    expect(wrapper.vm.isFormValid).toBeTruthy()
  })
})
