import React from "react";

class CourseForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[`${name}`]: value});
    }
    handleSave(){

    }

    render() {
        const {name} = this.props.course;
        return (
            <form action="">
                <div className="form-group">
                    <input type="text" name="name" value={name} className="form-control" onChange={this.onChange} />
                </div>
                 <div className="form-group">
                    <input type="submit" className="btn btn-primary" onSubmit={this.handleSave} />
                </div>
            </form>
        );
    }
}

export default CourseForm;
