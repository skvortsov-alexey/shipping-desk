import React from 'react'
import SingUpForm from './SignUpForm'

const SignUpPage = () => (
  <div>
    SignUpPage
    <p>
      Don't have an account? 
    </p>
    <SingUpForm onSubmit={(...arg) =>  console.log(arg)}/>
  </div>
)

export default SignUpPage