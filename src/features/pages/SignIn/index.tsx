import React from 'react'
import SignInForm from './SignInForm'

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm onSubmit={(...arg) =>  console.log(arg)} />
    {/*<PasswordForgetLink />
    <SignUpLink /> */}
  </div>
)

export default SignInPage