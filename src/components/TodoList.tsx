import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../store/reducers/ac/todo";

const TodoList: React.FC = () => {
    const { loading, todos, page, limit, error } = useTypedSelector(state => state.todo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

    if(loading){
        return <h1>Loading ...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }

    console.log(todos);
    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
        </div>
    );
};

export default TodoList
