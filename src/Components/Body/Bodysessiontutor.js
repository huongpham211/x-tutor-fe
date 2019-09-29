import React, { Component } from 'react';
import axios from '../../axios';
class Bodysessiontutor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          selectedFile: null,
          document:[]
        }
      }

      
      componentWillMount() {
        var config = {
          headers:{ "Authorization": "Bearer " + localStorage.getItem('signJwt')}
      }
        axios
        .get(`api/v1/sessions/${this.props.idcourses}`,config)
        .then((response) => {
          console.log(response.data.session);
          
          this.setState({
            document:response.data.session.documents
          });
        })
      }
      
      mapdocument = () => {
        if(this.state.document.length > 0){
          return this.state.document.map((value,key) =>(
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
      
      onChangeHandler = (event) => {
        this.setState({
          selectedFile:event.target.files[0],
          loaded: 0,
        });  
      }
     
      onClickHandler = () => {
        const data = new FormData()
        data.append('document', this.state.selectedFile)
        var config = {
          headers:{ "Authorization": "Bearer " + localStorage.getItem('signJwt')}
      }
      axios.
        patch(`api/v1/sessions/${this.props.idcourses}/document`,data,config)
        .then((res) =>{
          console.log(res);
          
        })
        .catch(err => console.log(err))
      }

    render() {
        return (
            <div className="upload_file">
      <div className="container">
        <form id="upload_file" encType="multipart/form-data">
          <h5>Uplload file</h5>
          <input id="updocument" type="file" name="document" onChange={this.onChangeHandler} className="form-control" />
          <div className="form-group">
            <label>Assignment name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Remarks:</label>
            <input type="text" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => this.onClickHandler()}>Add document</button>
        </form>
        <div className="assign">
          <h5>Assignment</h5>
        </div>
        {this. mapdocument()}
        {/* <div className="document">
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
        </div> */}
      </div>
    </div>
        );
    }
}

export default Bodysessiontutor;