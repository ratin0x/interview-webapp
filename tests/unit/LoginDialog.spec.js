import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import LoginDialog from '@/components/LoginDialog.vue'
import state from '../../src/store/state'
import { cloneDeep } from 'lodash'
import Vue from 'vue'
import Vuetify from 'vuetify'
const AUTH_URL = 'http://localhost:3333/login'

Vue.use(Vuetify)

describe('LoginDialog.vue', () => {
  let mockState

  beforeEach(() => {
    mockState = cloneDeep(state)
    mockState.showLoginDialog = true
  })

  describe('Props and Computeds', () => {
    it('should compute visibility from props', () => {
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.dialog).to.equal(mockState.showLoginDialog)
    })

    it('should get username from state', () => {
      mockState.user.username = 'Foo'
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.username).to.equal(mockState.user.username)
    })

    it('should get password from state', () => {
      mockState.user.password = 'Bar'
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.password).to.equal(mockState.user.password)
    })

    it('should get token from state', () => {
      mockState.user.token = 'Baz'
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.token).to.equal(mockState.user.token)
    })

    it('should allow submission when username and password are populated', () => {
      mockState.user.username = 'Foo'
      mockState.user.password = 'Bar'
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.canSubmit).to.equal(true)
      const submitButton = wrapper.find('#login-submit')
      expect(submitButton.attributes()['disabled']).to.be.undefined
    })

    it('should prevent submission when username is not populated', () => {
      mockState.user.password = 'Bar'
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.canSubmit).to.equal(false)
      const submitButton = wrapper.find('#login-submit')
      expect(submitButton.attributes()['disabled']).to.not.be.undefined
    })

    it('should prevent submission when password is not populated', () => {
      mockState.user.username = 'Foo'
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.canSubmit).to.equal(false)
      const submitButton = wrapper.find('#login-submit')
      expect(submitButton.attributes()['disabled']).to.not.be.undefined
    })

    it('should show errors when state contains errors', () => {
      mockState.errors = ['Foo']
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.showErrors).to.equal(true)
      const errorPanel = wrapper.find('#error-alert')
      expect(errorPanel.isVisible()).to.be.true
    })

    it('should not show errors when state does not contain errors', () => {
      mockState.errors = []
      const wrapper = shallowMount(LoginDialog, {
        propsData: { visible: mockState.showLoginDialog, authUrl: AUTH_URL },
        attachToDocument: true,
        mocks: {
          $store: {
            state: mockState
          }
        }
      })
      expect(wrapper.vm.showErrors).to.equal(false)
      const errorPanel = wrapper.find('#error-alert')
      expect(errorPanel.exists()).to.be.false
    })
  })
})
