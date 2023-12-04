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
      if (error.code === 'auth/invalid-login-credentials') return Alert.alert('Error', 'Invalid Login', [{ type: 'OK' }])
      return console.log(error)
    }
  },

  async autoLogin() {
    this.currentUser = await authController.autoLogin()
  },

  async createGoal(payload) {
    try {
      if(this.currentUser.goal.length > 0) payload.id = this.currentUser.goal[this.currentUser.goal.length - 1].id + 1
      else payload.id = 1

      this.currentUser.goal.push(payload)
      await authController.updateGoal(this.currentUser)
    } catch (e) {
      return console.log(e)
    }
  },

  async get() {
    try {
      this.currentUser = await authController.get(this.currentUser)
    } catch (error) {
      return console.error(error)
    }
  },

  async updateGoal(payload) {
    const index = this.currentUser.goal.findIndex(goal => goal.id === payload.id)
    this.currentUser.goal[index] = payload
    await authController.updateGoal(this.currentUser)
  },

  async deleteGoal(id) {
    this.currentUser.goal = this.currentUser.goal.filter(goal => goal.id !== id)
    await authController.updateGoal(this.currentUser)
  }
}