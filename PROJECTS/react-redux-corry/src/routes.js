import { IndexRoute, Route } from "react-router";

import AboutPage from "./components/about/AboutPage";
import App from "./components/App";
import CoursesPage from "./components/course/CoursesPage";
import HomePage from "./components/home/HomePage";
import ManageCoursePage from "./components/course/ManageCoursePage";
import React from "react";

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course/:id" component={ManageCoursePage} />
    </Route>
);
