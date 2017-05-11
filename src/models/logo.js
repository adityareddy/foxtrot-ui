import axios from 'axios'

export default {
  namespace: 'logo',
  state: {
  },
  subscriptions: {
  },
  effects: {
    *generateLogo ({ payload }, { put, call, select }) {
      try {
        const data = yield call([axios, axios.get], 'https://foxtrot-padityareddi862914.codeanyapp.com/')
        if (data) {
          yield put({ type: 'addGeneratedLogo', payload: data })
        } else {
        }
      } catch (e) {
        console.log('error', e)
      }
    }
  },
  reducers: {
    addGeneratedLogo: (state, {payload: {data}}) => {
      return { ...state, data }
    }
  }
}
