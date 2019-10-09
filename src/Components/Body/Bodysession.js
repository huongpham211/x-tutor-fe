import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from '../../axios';

class Bodysession extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            reportComment: '',
            rateStar: '',
            rateComment: '',
            document: []
        }
    }


    componentWillMount() {
        var config = {
            headers: { "Authorization": "Bearer " + localStorage.getItem('signJwt') }
        }
        axios
            .get(`api/v1/sessions/${this.props.idcourses}`, config)
            .then((response) => {
                console.log((new Date(response.data.session.date).toString()));
               

                this.setState({
                    document: response.data.session.documents
                });
            })
    }

    mapdocument = () => {
        if (this.state.document.length > 0) {
            return this.state.document.map((value, key) => (
                <div className="document" key={key}>
                    <h5 id="document_name">{`${value}`}</h5>
                    <h5>Test</h5>
                    <h5>Test</h5>
                    <h5>02/01/1996</h5>
                    <div className="group_change">
                        <a href={`http://localhost:3001${value}`}><i className="fas fa-eye"></i></a>
                        <i className="far fa-edit" />
                        <i className="fas fa-trash" />
                    </div>
                </div>
            ))
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rateStar: nextValue });
    }

    handleSubmit = () => {
        const { issue } = this.form
        const checkboxArray = Array.prototype.slice.call(issue);
        const checkedCheckboxes = checkboxArray.filter(input => input.checked);
        const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
        this.setState({
            reportIssue: checkedCheckboxesValues
        });
    }

    onCommentRate = (e) => {
        this.setState({
            rateComment: e.target.value
        })
    }

    onCommentReport = (e) => {
        this.setState({
            reportComment: e.target.value
        });
        console.log(this.state.reportComment);

    }

    render() {
        const { rateStar } = this.state;

        return (
            <div className="container margin">
                <h5>Virtual Class for Session 1</h5>
                <p>This session ended on 23 February 04:00 hrs</p>
                <div className="sessionstudent">
                    <div className="col-lg-6">
                        <form className="uploadfile" id="report" ref={form => this.form = form}>
                            <h4>Report issue</h4>
                            <h4 className="report">Reason:</h4>
                            <div className="checkbox" onChange={this.handleSubmit}>
                                <label>
                                    <input type="checkbox" value="Late" name="issue" />
                                    Late
                            </label>
                                <label>
                                    <input type="checkbox" value="Absent" name="issue" />
                                    Absent
                            </label>
                                <label>
                                    <input type="checkbox" value="Left early" name="issue" />
                                    Left early
                            </label>
                                <label>
                                    <input type="checkbox" value="Technical Difficulty" />
                                    Technical Difficulty
                            </label>
                                <label>
                                    <input type="checkbox" value="Others" name="issue" />
                                    Others
                            </label>
                            </div>
                            <div className="form-group">
                                <label>Comments:</label>
                                <textarea rows="4" cols="50" value={this.state.reportComment} onChange={(e) => this.onCommentReport(e)}></textarea>
                            </div>
                            <button type="submit" id="update_avatar" className="btn btn-primary " onClick={(reportIssue, reportComment) => this.props.reportSession(this.state.reportIssue, this.state.reportComment)}>Report</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <form className="uploadfile" id="rate">

                            <h4>Rate session</h4>
                            <div className="form-group">
                                <label className="rate">Rating:</label>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rateStar}
                                    onStarClick={this.onStarClick.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Comments:</label>
                                <textarea rows="4" value={this.state.rateComment} onChange={(e) => this.onCommentRate(e)} cols="50"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary " onClick={(rateComment, rateStar) => this.props.rateSession(this.state.rateComment, this.state.rateStar)}>Rate</button>
                        </form>
                    </div>

                </div>

                <div className="assign">
                    <h5>Assignment</h5>
                </div>
                {this.mapdocument()}


            </div>
        );
    }
}

export default Bodysession;