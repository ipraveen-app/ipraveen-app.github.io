import CourseList from "./CourseList";
import React from "react";
import { connect } from "react-redux";

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);
