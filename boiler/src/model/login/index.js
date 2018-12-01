import * as service from "../../service/auth";
import user from "./../../data/user"


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
        this.onRequest();
        let res = await service.login(payload);
        this.onLogin(res);
      
        // save required data
        await user.setLogin(true);

        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }
    }
  }
};
