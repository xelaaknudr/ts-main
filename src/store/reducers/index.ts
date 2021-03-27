import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {toDoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    todo: toDoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
