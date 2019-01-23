import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(Message, {
      propsData: { message: message }
    })
    console.log(wrapper)
    expect(wrapper.text()).to.include(message)
  })
})
