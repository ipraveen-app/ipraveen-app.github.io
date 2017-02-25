import React from "react";

class Comments extends React.Component {

    renderComment(comment, i) {
        return (
            <div className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        const {comments} = this.props;
        return (
            <div className="comment">
                {comments.map(this.renderComment)}
                <form action="" className="comment-form" ref="commentForm">
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="text" hidden/>
                </form>
            </div>

        );
    }
}

export default Comments;