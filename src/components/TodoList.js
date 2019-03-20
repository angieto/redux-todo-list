import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <TodoItem 
                key={todo.id} 
                {...todo} 
                onClick={ () => toggleTodo(todo.id) }
            />
        ))}
    </ul>
);

export default TodoList;
