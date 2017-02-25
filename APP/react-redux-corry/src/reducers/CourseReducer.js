import * as actionTypes from "../actions/ActionTypes";

export default function courseReducers(state = [], action) {

    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.course;
        default:
            return state;
    }
}
