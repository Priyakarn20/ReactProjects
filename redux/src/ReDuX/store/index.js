import { createStore } from "redux";
import countReducer from "../reducer";

const rootReducer = combineReducer(
    {
        count: countReducer
    }
);

export default rootReducer;