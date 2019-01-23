import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import LoginDialog from '@/components/LoginDialog.vue'
import state from '../../src/store/state'

describe('LoginDialog.vue', () => {
  it('renders props.message when passed and visible', () => {
    const message = 'new message'
    const wrapper = shallowMount(LoginDialog, {
      propsData: { message: message, visible: true },
      mocks: {
        $store: {
          state: state
        }
      }
    })
    expect(wrapper.text()).to.include(message)
  })
})
