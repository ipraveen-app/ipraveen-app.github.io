import {combineReducers} from "redux";
import courses from "./CourseReducer";

const rootReducers = combineReducers({
    courses
});

export default rootReducers;
