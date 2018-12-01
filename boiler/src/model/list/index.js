import * as service from "../../service/list";

export default {
  state: {
    loading: false,
    userData:[],
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
    onData(state, data) {
      console.log(data);
      return {
        ...state,
        loading: false,
        userData: data
      };
    },
  },
  effects: {

    async fetchUsers(rootState) {
      try {
        this.onRequest();
        let res = await service.getUsers();
        this.onData(res);
        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }
    }
  }
};
