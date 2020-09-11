import React from 'react'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Galerie from './pages/Galerie'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/galerie" render={() => <Galerie />} />
      </Switch>
      <img src="/images/121.jpg" width="100%" />
    </div>
  )
}

export default App
