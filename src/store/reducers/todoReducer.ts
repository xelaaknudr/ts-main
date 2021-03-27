import {TodoAction, todoActionTypes, TodoState} from '../../types/todoReducerTypes'

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const toDoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type){
    case todoActionTypes.FETCH_TODOS:
      return { ...state, loading: true}
    case todoActionTypes.FETCH_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case todoActionTypes.FETCH_TODOS_ERROR:
      return {...state, error: action.payload, loading: false}
    case todoActionTypes.SET_TODO_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}
