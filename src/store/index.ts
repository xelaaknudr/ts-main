import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import {rootReducer} from "./reducers";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootSaga);
