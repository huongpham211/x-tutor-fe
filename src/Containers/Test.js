import React, { Component } from 'react';

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedFile: null
    }
  }
  
 
  onChangeHandler = (event) => {
    this.setState({
      selectedFile:event.target.files[0],
      loaded: 0,
    });  
  }
 
  render() {
    
    return (                
      <div className="upload_file">
      <div className="container">
        <form id="upload_file">
          <h5>Uplload file</h5>
          <input type="file" name="file" onChange={this.onChangeHandler} className="form-control" />
          <div className="form-group">
            <label>Assignment name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Remarks:</label>
            <input type="text" />
          </div>
          <button>Add document</button>
        </form>
        <div className="assign">
          <h5>Assignment</h5>
        </div>
        <div className="document">
          <h5>12312das53634.doc</h5>
          <h5>Test</h5>
          <h5>Test</h5>
          <h5>02/01/1996</h5>
          <div className="group_change">
            <i className="fas fa-download" />
            <i className="far fa-edit" />
            <i className="fas fa-trash" />
          </div>
        </div>    
        <div className="document">
          <h5>12312das53634.doc</h5>
          <h5>Test</h5>
          <h5>Test</h5>
          <h5>02/01/1996</h5>
          <div className="group_change">
            <i className="fas fa-download" />
            <i className="far fa-edit" />
            <i className="fas fa-trash" />
          </div>
        </div>
      </div>
    </div>
    
    );
  }
}

export default Test;