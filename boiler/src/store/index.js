import { init } from "@rematch/core";
import * as models from "../model";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';
const routeMiddleware = routerMiddleware();
const middlewares = [routeMiddleware];

const store = init({
  redux: {
    reducers: {
      router: routerReducer,
      form: formReducer

    },
    middlewares: middlewares
  },
  models
});

export { store };
