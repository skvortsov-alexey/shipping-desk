import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/types'
import { actions } from 'features/userSession/slice'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errorCode = useSelector((state: RootState) => state.userSession.signInErrorCode)
  const dispatch = useDispatch()

  const isInvalid = !email || !password

  function handleSubmit(event: FormEvent) {
    dispatch(actions.signIn({ email, password }))
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>
      {errorCode && <p>{errorCode}</p>}
    </form>
  )
}

export default SignInForm