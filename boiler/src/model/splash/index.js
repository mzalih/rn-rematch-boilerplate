import * as service from "../../service/auth";

export default {
  state: {
    loading: true,
    loginStatus: false,
  },
  reducers: {
    onRequest(state) {
      return {
        ...state,
        loading: true
      };
    },
    onSuccess(state, data) {
      return {
        ...state,
        loading: false
      };
    },
    onError(state,err) {
      return {
        ...state,
        loading: false,
        error:err
      };
    },
    onData(state, data) {
      return {
        ...state,
        loading: false,
        loginStatus: data,
        userData: data
      };
    },
  },
  effects: {
    async checkLogedIn(rootState) {
      try {
        this.onRequest();
        let res = await service.loggedIn();
        this.onData(res);
        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }
    }
  }
};