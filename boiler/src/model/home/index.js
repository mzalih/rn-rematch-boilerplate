import * as service from "../../service/auth";

export default {
  state: {
    loginStatus:true,
    loading: false,
    userData:null,
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
      console.log("ERRR",err);
      return {
        ...state,
        loading: false
      };
    },
    onLogout(state, data) {
      return {
        ...state,
        loginStatus:false,
        loading: false,
        userData: null
      };
    },
    onData(state, data) {
      console.log(data);
      return {
        ...state,
        loginStatus:true,
        loading: false,
        userData: data
      };
    },
  },
  effects: {

    async logout(rootState){

       try {
        this.onRequest();
        let res = await service.logout();
        this.onLogout(res);
        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }

    },
    async fetchUser(rootState) {
      try {
        this.onRequest();
        let res = await service.getUser();
        this.onData(res);
        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }
    }
  }
};
