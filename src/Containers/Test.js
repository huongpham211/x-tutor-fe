import React, { Component } from 'react';
import axios from '../axios';
class Test extends Component {
  constructor(props, context) {
    super(props, context);
    
  }
  componentWillMount() {
    var config = {
      headers: { 'Authorization': "Bearer " + localStorage.getItem('signJwt') }
    };
    axios
      .get(`api/v1/users/all-tutors`, config)
      .then((response) => {
        this.setState({
          dataDb: response.data.allTutor,
          loading: false
        });
        console.log(this.state.dataDb);

      })
      .catch(err => console.log(err));

  }

  render() {
    
    return (
      <div>
        <form/>

      </div>
    );
  }
}

export default Test;