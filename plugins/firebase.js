import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBF4kNqDxMfJ6UVsKTE2lxECqqYllCt_R8",
      authDomain: "mc-build-practice.firebaseapp.com",
      projectId: "mc-build-practice",
      storageBucket: "mc-build-practice.appspot.com",
      messagingSenderId: "433463283137",
      appId: "1:433463283137:web:7e7bfe064d06a2c3b1f340",
      measurementId: "G-WQ2ZVMZMY6"    }
  )
}

export default firebase
