import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(Message, {
      propsData: { message: message }
    })
    expect(wrapper.text()).to.include(message)
  })

  it('renders props.title when passed', () => {
    const title = 'new title'
    const wrapper = shallowMount(Message, {
      propsData: { title: title }
    })
    expect(wrapper.text()).to.include(title)
  })
})
