import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import filterReducer from './reducers/filterReducer'; 

const rootReducer = combineReducers({
    todos: todoReducer,
    visibilityFilter: filterReducer
});

const store = createStore(rootReducer);

export default store;
