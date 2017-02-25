import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import Main from "./Main";

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);