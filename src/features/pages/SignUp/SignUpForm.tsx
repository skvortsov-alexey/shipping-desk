import React, { FormEvent, useState } from 'react'

interface SignUpFormProps {
  error?: { message: string }
  onSubmit(username: string, email: string, password: string, passwordConfirmation: string): void
}

function SignUpForm({ error, onSubmit }: SignUpFormProps) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleSubmit(event: FormEvent) {
    onSubmit(username, email, password, passwordConfirmation)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordConfirmation"
        value={passwordConfirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error.message}</p>}
    </form>
  )  
}

export default SignUpForm