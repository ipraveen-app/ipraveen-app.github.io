import React from "react";
import { Link } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";

class Photo extends React.Component {
    render() {
        const {comments, post, i} = this.props;
        const {caption, code, display_src, likes} = post;
        const commentCount = comments[code] ? (comments[code].length + 1) : "0";
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${code}`}>
                        <img src={display_src} alt={caption} className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={likes} className="likes-heart">{likes}</span>
                    </CSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{caption}</p>
                    <div className="control-buttons">
                        <button onClick={() => this.props.increment(i)} className="likes">&hearts; {likes}</button>
                        <Link className="button" to={`/view/${code}`}>
                            <span className="comment-count"></span>
                            <span className="speech-bubble"></span>
                             {commentCount}    
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );

    }
}

export default Photo;