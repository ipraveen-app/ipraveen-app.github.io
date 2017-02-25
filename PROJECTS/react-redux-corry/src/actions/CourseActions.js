import * as actionTypes from "./ActionTypes";

import courseApi from "../api/mockCourseApi";

export function loadCourseSuccess(course) {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}
