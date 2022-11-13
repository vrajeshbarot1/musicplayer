import { createStore } from "redux";

import rootReducer from "./reducers/index.js";

const Store = createStore(rootReducer);

export default Store;