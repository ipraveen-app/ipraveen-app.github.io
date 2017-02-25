import React from "react";
import {Link} from "react-router";

const CourseListRow = ({course}) =>{
    const {id, title, authorId, category, length} = course;
    return (
        <tr>
            <td> <a href="" traget="_blank">Watch</a></td>
            <td><Link  to={`/course/${id}`}>{title}</Link></td>
            <td>{authorId}</td>
            <td>{category}</td>
            <td>{length}</td>
        </tr>
    );
};

export default CourseListRow;
