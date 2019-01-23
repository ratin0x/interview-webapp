import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import LoginDialog from '@/components/LoginDialog.vue'

describe('LoginDialog.vue', () => {
  it('renders props.message when passed and visible', () => {
    const message = 'new message'
    const wrapper = shallowMount(LoginDialog, {
      propsData: { message: message, visible: true }
    })
    console.log(wrapper)
    expect(wrapper.text()).to.include(message)
  })
})
