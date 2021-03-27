import {TodoAction, todoActionTypes} from "../../../types/todoReducerTypes";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchTodos = (page = 1, limit = 10) => {
    return async(dispatch: Dispatch<TodoAction>) => {
        try{
            dispatch({type: todoActionTypes.FETCH_TODOS})
            const response = await axios.get('http://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: todoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({type: todoActionTypes.FETCH_TODOS_ERROR, payload: 'error from redux todos'})
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type : todoActionTypes.SET_TODO_PAGE, payload: page}
}
