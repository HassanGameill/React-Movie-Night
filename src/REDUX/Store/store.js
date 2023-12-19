import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { moviesReducer } from "../Reducers/Reducers";



export const appReducer = combineReducers({
    movies: moviesReducer

})


export const store = createStore(appReducer, applyMiddleware(thunk));