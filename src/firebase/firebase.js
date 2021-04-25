import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBKKtdglc33dE9g0DiTDPZ9PRRBztNKcsQ', //process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'vanhoutembaeder-dev.firebaseapp.com',
  projectId: 'vanhoutembaeder-dev',
  storageBucket: 'vanhoutembaeder-dev.appspot.com',
  messagingSenderId: '185409726291',
  appId: '1:185409726291:web:51d639eeb0715c1cf3e3a6',
})

export const auth = app.auth()
export default app
