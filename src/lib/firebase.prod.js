import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

//Need to seed database

const config = {
  apiKey: 'AIzaSyC2a8QG8MtP_o7jZwmWu5IyunIqEnNjWTc',
  authDomain: 'netflix-clone-28893.firebaseapp.com',
  projectId: 'netflix-clone-28893',
  storageBucket: 'netflix-clone-28893.appspot.com',
  messagingSenderId: '604941422496',
  appId: '1:604941422496:web:6eda7eba102e175a6edec5',
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
