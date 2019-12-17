import React, { FormEvent, useState } from 'react'

interface PasswordForgetFormProps {
  error?: { message: string }
  onSubmit(email: string): void
}

function PasswordForgetForm({ error, onSubmit }: PasswordForgetFormProps) {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent) {
    onSubmit(email)
    event.preventDefault()
  }

  const isInvalid = !email

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default PasswordForgetForm

const PasswordForgetLink = () => (
  <p>
    {/* <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link> */}
  </p>
)