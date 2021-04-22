import React from 'react'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import { AuthProvider } from './contexts/AuthContext'
import Signup from './pages/Signup'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/galerie" render={() => <Galerie />} />
        <Route exact path="/kontakt" render={() => <Contact />} />
        <AuthProvider>
          <Route exact path="/signup" render={() => <Signup />} />
        </AuthProvider>
      </Switch>
    </div>
  )
}

export default App
