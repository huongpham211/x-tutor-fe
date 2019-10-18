import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom'

class Filter extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tempValue: '',
            coursename: '',
            tutor: '',
            basedIn:'',
            academicLevel:''
        }
    }

    onCourseName(e) {
        this.setState({
            coursename: e.target.value
        });
    }

    onBasedIn(e) {
        this.setState({
            basedin: e.target.value
        });
    }

    onAcademicLevel (e) {
        this.setState({
            academicLevel: e.target.value
        });
    }

    render() {
        return (
            <div className="bglogin1">
                <form action="" className="login-form1">
                    <h1>Filter</h1>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                    <div className="txtb">
                        <input id="" type="text"  onChange={(e) => this.onAcademicLevel(e)} />
                        <span data-placeholder="Your academic level" />
                    </div>
                    <div className="txtb">
                        <input id="" type="text" onChange={(e) => this.onCourseName(e)} />
                        <span data-placeholder="All courses here" />
                    </div>
                    <div className="txtb">
                        <input id="" type="text" onChange={(e) => this.onBasedIn(e)} />
                        <span data-placeholder="BasedIn" />
                    </div>
                    <Link to={`/filter_course/${this.props.match.params.id}`}>
                        <button  className="otherbutton" onClick={(academicLevel,coursename, basedin) => this.props.filterFunction(this.state.academicLevel,this.state.coursename, this.state.basedin)}>Filter</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Filter;