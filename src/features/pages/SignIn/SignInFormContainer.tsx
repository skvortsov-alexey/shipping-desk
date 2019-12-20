import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/types'
import { actions } from 'features/userSession/slice'

import SignInForm from './SignInForm'

function SignInFormContainer() {
  const errorCode = useSelector((state: RootState) => state.userSession.signInErrorCode)
  const dispatch = useDispatch()

  return (
    <SignInForm
      errorMessage={errorCode}
      onSubmit={(email, password) => dispatch(actions.signIn({ email, password }))}
    />
  )
}

export default SignInFormContainer