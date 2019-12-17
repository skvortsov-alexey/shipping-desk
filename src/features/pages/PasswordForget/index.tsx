import React from 'react'
import PasswordForgetForm from './PasswordForgetForm'

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm onSubmit={(...arg) =>  console.log(arg)} />
  </div>
)

export default PasswordForgetPage