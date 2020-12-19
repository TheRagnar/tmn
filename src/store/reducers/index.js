import { combineReducers } from "redux";
import auth from "./auth";
import banners from "./banners";
import registration from "./registration";
import categories from "./categories";
import userInfo from "./userInfo";
import productsRequest from "./productsRequest";
import card from "./card";

const rootReducer = combineReducers({
  auth: auth,
  banners: banners,
  registration: registration,
  categories: categories,
  userInfo: userInfo,
  productsRequest: productsRequest,
  card: card,
});

export default rootReducer;
