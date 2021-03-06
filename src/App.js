import React from 'react'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import { AuthProvider } from './contexts/AuthContext'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Admin from './pages/Admin'
import News from './pages/News'
import PrivateRoute from './pages/PrivateRoute'
import DownloadFromFirestore from './firebase/DownloadFromfirestore'

function App() {
  const [firestoreData] = DownloadFromFirestore()

  return (
    <div>
      <Header />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/galerie" component={Galerie} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/neuigkeiten">
            <News firestoreData={firestoreData} />
          </Route>

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </AuthProvider>
    </div>
  )
}

export default App
