import * as service from "../../service/login";

export default {
  state: {
    loading: false,
    loginStatus:false,
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
    onError(state) {
      return {
        ...state,
        loading: false
      };
    },
    onLogin(state, data) {
      
      return {
        ...state,
        loading: false,
        loginStatus: data.id ? true :false
      };
    },
  },
  effects: {
    async login(payload, rootState) {
      try {
        console.log("ON MODAL",payload);
        this.onRequest();
        console.log(this);
        let res = await service.login(payload);
        this.onLogin(res);
        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }
    }
  }
};
