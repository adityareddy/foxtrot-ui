import axios from 'axios'

export default {
  namespace: 'logo',
  state: {
      list:[]
  },
  subscriptions: {
  },
  effects: {
    *generateLogo ({ payload }, { put, call, select }) {
      try {
        const data = yield call([axios, axios.get], 'https://sxzaw-adityareddy.c9users.io:8081/generate?text=rest&size=72&state=1,2,3,4')
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
      return { ...state, list: state.list.concat(data) }
    }
  }
}
