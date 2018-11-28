import { init } from "@rematch/core";
import * as models from "../model";
import { routerReducer, routerMiddleware } from "react-router-redux";

const routeMiddleware = routerMiddleware();
const middlewares = [routeMiddleware];

const store = init({
  redux: {
    reducers: {
      router: routerReducer
    },
    middlewares: middlewares
  },
  models
});

export { store };
