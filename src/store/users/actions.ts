import {
  User,
  UserActionTypes,
  REGISTER_USER,
  BLOCK_USER
} from './types'

export const registerUser = (user: User): UserActionTypes => ({
  type: REGISTER_USER,
  payload: user
})

export const blockUser = (userId: string): UserActionTypes => ({
  type: BLOCK_USER,
  payload: userId
})