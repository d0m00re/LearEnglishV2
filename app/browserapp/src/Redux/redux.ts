import {
    combineReducers,
    createStore,
} from 'redux';

// import {persistStore, persistReducer} from "redux-persist";

//import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from 'redux-devtools-extension';

import ReducerTemplate from './Reducers/Template';

export const defaultState = {
    template : ReducerTemplate
    //  put another reducer : gameRoom : GameRoomReducer
};


export const reducers = combineReducers(defaultState);

/*
const persistConfig = {
  key: "root",
  storage
};
*/

//const persistedReducer = persistReducer(persistConfig, reducer);

export function configureStore(initialState = {}) {

    const store = createStore(reducers, composeWithDevTools());
    return store;
};

export const store = configureStore();