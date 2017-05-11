export default {
  namespace: 'layout',
  state: {
    drawerOpen: false,
    drawerContent: null
  },
  subscriptions: {
  },
  effects: {
  },
  reducers: {
    setRightDrawerState: (state, {payload}) => {
      return { ...state, drawerOpen: payload.isOpen, drawerContent: payload.content }
    }
  }
}
