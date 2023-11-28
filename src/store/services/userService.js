import { Alert } from 'react-native'
import AuthController from '../../controller/AuthController'

const authController = new AuthController()

export const userService = {
  currentUser: null,

  async create(payload) {
    try {
      this.currentUser = await authController.create(payload)
    } catch (error) {
      return console.log(error)
    }
  },

  async login(payload) {
    try {
      this.currentUser = await authController.login(payload)
    } catch (error) {
      if(error.code === 'auth/invalid-login-credentials') return Alert.alert('Error', 'Invalid Login', [{type: 'OK'}])
      return console.log(error)
    }
  },

  async autoLogin() {
    this.currentUser = await authController.autoLogin()
  },

  async saveFrase(payload) {
    try {
      await authController.saveFrase(payload)
    } catch (error) {
      return console.log(error)
    }
  }
}