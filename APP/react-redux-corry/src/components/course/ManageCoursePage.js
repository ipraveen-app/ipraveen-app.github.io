import * as courseActions from "../../actions/CourseActions";

import CourseForm from "./CourseForm";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//import { Link } from "react-router";

class ManageCoursePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            course: Object.assign({}, this.props.course)
        };
    }
    render() {
        return (
            <div className="">
                <h1>Mage Course</h1>
                <CourseForm course={this.state.course} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadCourses: bindActionCreators(courseActions.loadCourses, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
