import React, { FormEvent, useState } from 'react'

interface SignInFormProps {  
  errorMessage: string | null
  onSubmit: (email: string, password: string) => void
}

function SignInForm({ errorMessage, onSubmit }: SignInFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isInvalid = !email || !password

  function handleSubmit(event: FormEvent) {
    onSubmit(email, password)
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
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  )
}

export default SignInForm