import { connect } from 'react-redux';
import { toggleTodo } from '../store/actions/todoAction';
import { VisibilityFilters } from '../store/actions/types';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(item => !item.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(item => item.completed);
        default:
            throw new Error('Unknown filter: ', filter)
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilters)
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);