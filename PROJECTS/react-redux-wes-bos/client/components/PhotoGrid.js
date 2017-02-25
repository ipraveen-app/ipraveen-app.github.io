import React from "react";
import { Link } from "react-router";
import Photo from "./Photo";

class PhotoGrid extends React.Component {

    render() {
        const {comments, increment} = this.props;
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo key={i} increment={increment} comments={comments} post={post} i={i} />)}
            </div>
        );

    }
}

export default PhotoGrid;