import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from 'components/Navigation'

import AccountPage from 'features/pages/Account'
import AdminPage from 'features/pages/Admin'
import HomePage from 'features/pages/Home'
import LandingPage from 'features/pages/Landing'
import PasswordForgetPage from 'features/pages/PasswordForget'
import SignInPage from 'features/pages/SignIn'
import SignUpPage from 'features/pages/SignUp'

import * as Routes from 'features/pages/types';

const App = () => (
  <Router>
    <Navigation />
    <hr />
    <Switch>      
      <Route exact parh={Routes.LANDING} component={LandingPage} />
      <Route parh={Routes.SIGN_UP} component={SignUpPage} />
      <Route parh={Routes.SIGN_IN} component={SignInPage} />
      <Route parh={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route parh={Routes.HOME} component={HomePage} />
      <Route parh={Routes.ACCOUNT} component={AccountPage} />
      <Route parh={Routes.ADMIN} component={AdminPage} />
    </Switch>
  </Router>
)

export default App