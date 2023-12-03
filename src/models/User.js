export default class User {
  constructor({ displayName, email, emailVerified, phoneNumber, photoURL, uid, goal } = {}) {
    this.displayName = displayName
    this.email = email
    this.emailVerified = emailVerified
    this.phoneNumber = phoneNumber
    this.photoURL = photoURL
    this.uid = uid
    this.goal = goal
  }
}