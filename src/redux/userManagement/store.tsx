import { createStore } from "redux";
import { userManagementReducer } from "./index";

const store = createStore(userManagementReducer);

export default store;
