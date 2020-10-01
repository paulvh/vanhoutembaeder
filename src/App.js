import React from 'react'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/galerie" render={() => <Galerie />} />
        <Route exact path="/kontakt" render={() => <Contact />} />
      </Switch>
    </div>
  )
}

export default App
