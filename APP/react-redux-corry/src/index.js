/*eslint-disable import/default */
import "babel-polyfill";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import * as actions from "./actions/CourseActions";

import { Router, browserHistory } from "react-router";

import { Provider } from "react-redux";
import React from "react";
import configureStore from "./store/configureStore";
import { render } from "react-dom";
import routes from "./routes";

const store = configureStore();
store.dispatch(actions.loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById("app")
);
