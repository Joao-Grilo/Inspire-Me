export default class User {
  constructor({ displayName, email, emailVerified, phoneNumber, photoURL, uid } = {}) {
    this.displayName = displayName
    this.email = email
    this.emailVerified = emailVerified
    this.phoneNumber = phoneNumber
    this.photoURL = photoURL
    this.uid = uid
  }
}