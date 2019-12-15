import * as firebase from 'firebase/app'
import 'firebase/auth'

import { Api } from './types'

const config = {/* firebase config */}

class FirebaseApi implements Api {
  protected auth: firebase.auth.Auth

  constructor() {
    firebase.initializeApp(config)
    this.auth = firebase.auth()
  }

  async createUser (email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
  }
    
  async signIn(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password)
  }
    
  async signOut() {
    await this.auth.signOut()
  }

  async resetPassword(email: string) {
    await this.auth.sendPasswordResetEmail(email)
  }
  
  async updatePassword(password: string) {
    const { currentUser } = this.auth
    if (currentUser) {
      await currentUser.updatePassword(password)
    }    
  }
}

const firebaseApi = new FirebaseApi()

export default firebaseApi