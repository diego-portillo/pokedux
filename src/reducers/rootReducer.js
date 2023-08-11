import { combineReducers } from "redux";
// import { uiReducer } from "./ui";
import uiReducer from '../slices/uiSlice'
import dataReducer from '../slices/dataSlice'

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
})

export default rootReducer