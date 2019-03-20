import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import filterReducer from './reducers/filterReducer'; 

const rootReducer = combineReducers({
    todos: todoReducer,
    visibilityFilters: filterReducer
});

const store = createStore(rootReducer);

export default store;
