import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/config'
import BaseController from './BaseController'
import User from '../models/User'

export default class AuthController extends BaseController {
    async create(payload) {
        await createUserWithEmailAndPassword(auth, payload.email, payload.password)

        await updateProfile(auth.currentUser, {
            displayName: payload.name
        })

        await super.setDocument('Users', auth.currentUser.uid, { goal: [] })
        return new User(auth.currentUser)
    }

    async login(payload) {
        await signInWithEmailAndPassword(auth, payload.email, payload.password)
        return new User(auth.currentUser)
    }

    async autoLogin() {
        const user = await new Promise(resolve => {
            onAuthStateChanged(auth, user => {
                resolve(user)
            })
        })

        if(!user) return
        return new User(auth.currentUser)
    }

    async updateGoal(currentUser) {
        await super.updateDocument('Users', currentUser.uid, { goal: currentUser.goal})
    }

    async get(payload) {
        const res = await super.getDocument('Users', payload.uid)
        return new User({ ...payload, ...res})
    }
}
