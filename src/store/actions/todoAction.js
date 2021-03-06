import { ADD_TODO, TOGGLE_TODO } from "./types";

let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
};

