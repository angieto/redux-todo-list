import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/types';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log("Current filter", action.filter);
            return action.filter;
        default:
            console.log("Current filter", state);
            return state;
    }
}

export default visibilityFilter;