export interface TodoState  {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum todoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE= 'SET_TODO_PAGE',
}

interface FetchTodoAction{
    type: todoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction{
    type: todoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface FetchTodoErrorAction{
    type: todoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPageAction{
    type: todoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction
