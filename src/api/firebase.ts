import * as firebase from 'firebase/app'
import 'firebase/auth'

import { Api, ApiError, ApiErrorType } from './types'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

class FirebaseApi implements Api {
  protected auth: firebase.auth.Auth

  constructor() {
    firebase.initializeApp(config)
    this.auth = firebase.auth()
  }

  async createUser(email: string, password: string) {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password)
    } catch(e) {
      switch (e.code) {
        case 'auth/email-already-in-use': throw new ApiError(e.message, ApiErrorType.AUTH_EMAIL_ALREADY_IN_USE)
        case 'auth/invalid-email': throw new ApiError(e.message, ApiErrorType.AUTH_INVALID_EMAIL)
        case 'auth/operation-not-allowed': throw new ApiError(e.message, ApiErrorType.AUTH_OPERATION_NOT_ALLOWED)
        case 'auth/weak-password': throw new ApiError(e.message, ApiErrorType.AUTH_WEAK_PASSWORD)
        default:
          throw new ApiError(e.message, ApiErrorType.API_UNKNOWN_ERROR)
      }
    }
  }

  async signIn(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password)
    } catch(e) {
      switch (e.code) {
        case 'auth/invalid-email': throw new ApiError(e.message, ApiErrorType.AUTH_INVALID_EMAIL)
        case 'auth/user-disabled': throw new ApiError(e.message, ApiErrorType.AUTH_USER_DISABLED)
        case 'auth/user-not-found': throw new ApiError(e.message, ApiErrorType.AUTH_USER_NOT_FOUND)
        case 'auth/wrong-password': throw new ApiError(e.message, ApiErrorType.AUTH_WRONG_PASSWORD)
        default:
          throw new ApiError(e.message, ApiErrorType.API_UNKNOWN_ERROR)
      }
    }
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