import Header from "./common/Header";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
