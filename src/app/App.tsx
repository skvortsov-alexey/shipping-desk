import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from 'components/Navigation'

import AccountPage from 'features/pages/AccountPage'
import AdminPage from 'features/pages/AdminPage'
import HomePage from 'features/pages/HomePage'
import LandingPage from 'features/pages/LandingPage'
import PasswordForgetPage from 'features/pages/PasswordForgetPage'
import SignInPage from 'features/pages/SignInPage'
import SignUpPage from 'features/pages/SignUpPage'

import * as Routes from 'features/pages/types';

const App = () => (
  <Router>
    <Navigation />
    <hr />
    <Route exact parh={Routes.LANDING} component={LandingPage} />
    <Route parh={Routes.SIGN_UP} component={SignUpPage} />
    <Route parh={Routes.SIGN_IN} component={SignInPage} />
    <Route parh={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route parh={Routes.HOME} component={HomePage} />
    <Route parh={Routes.ACCOUNT} component={AccountPage} />
    <Route parh={Routes.ADMIN} component={AdminPage} />
  </Router>
)

export default App