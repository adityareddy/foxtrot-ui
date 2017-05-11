import firebase from 'firebase'

export default {
  namespace: 'auth',
  state: {
    authenticated: false,
    currentUser: null
  },
  subscriptions: {
    initializeFirebase() {
      const config = {
        apiKey: "AIzaSyD0O6iSXXdHjzQ8zvHqlVSyOT6PenE3iG8",
        authDomain: "foxtrot-166608.firebaseapp.com",
        databaseURL: "https://foxtrot-166608.firebaseio.com",
        projectId: "foxtrot-166608",
        storageBucket: "foxtrot-166608.appspot.com",
        messagingSenderId: "1098464414255"
      };

      if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
      }
    }
  },
  effects: {
    *logInEmail ({ payload }, { put, call, select }) {
      try {
        const data = yield call([firebase.auth(), firebase.auth().signInWithEmailAndPassword], payload.email, payload.password)
        if (data) {
          yield put({ type: 'authenticate', payload: true })
          yield put({ type: 'setUser', payload: data })
        } else {
        }
      } catch (e) {
        console.log('error', e)
      }
    },
    *logInGoogle ({ payload }, { put, call, select }) {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const data = yield call([firebase.auth(), firebase.auth().signInWithPopup], provider)
        if (data) {
          console.log(data)
          yield put({ type: 'authenticate', payload: true })
          yield put({ type: 'setUser', payload: data.user })
        } else {
        }
      } catch (e) {
        console.log('error', e)
      }
    },
    *register ({ payload }, { put, call, select }) {
      try {
        const data = yield call([firebase.auth(), firebase.auth().createUserWithEmailAndPassword], payload.email, payload.password)
        if (data) {
          console.log(data)
          window.location.href = '/login'
        } else {
        }
      } catch (e) {
        console.log('error', e)
      }
    },
    *logOut ({ payload }, { put, call, select }) {
      yield put({ type: 'setUser', payload: null })
      yield put({ type: 'authenticate', payload: false })
      yield call([firebase.auth(), firebase.auth().signOut])
    }
  },
  reducers: {
    authenticate: (state, {payload}) => ({ ...state, authenticated: payload }),
    setUser: (state, {payload}) => ({ ...state, currentUser: payload })
  }
}
