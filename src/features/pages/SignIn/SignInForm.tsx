import React, { FormEvent, useState } from 'react'

interface SighInFormProps {
  error?: { message: string }
  onSubmit(email: string, password: string): void
}

function SignInForm({ error, onSubmit }: SighInFormProps) {
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
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignInForm