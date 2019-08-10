import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Bodypage from '../Components/Body/Bodypage';
import Footer from '../Components/Footer';
import axios from '../axios';
import Data from '../Containers/Data.json';



class Page extends Component {
   constructor(props, context) {
       super(props, context);
       this.state = {
        id : this.props.match.params.id,
        rolesId:null,
        data:Data,
        dataDb:''
    }
   }

   componentWillMount() {
    var config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
    };
    axios
    .get(`api/v1/users/all-tutors`,config)
    .then((response) =>{
       this.setState({
           dataDb:response.data
       });
    })
    .catch(err => console.log(err));
   }
   
   
   componentDidMount(){
    var config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
    };
       axios
       .get(`api/v1/users/${this.state.id}`,config)
        .then((response) =>{
           
            this.setState({
                rolesId:response.data.userFound.rolesId
            })
        })
        .catch(err =>console.log(err))
   }
   
   showheader = () => {
       if(this.state.rolesId === 'Tutor'){
           return <Headertutor 
           passdata={this.state.id}
           checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
       }
       else {
           return <Header
           passdata={this.state.id}
            checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
       }
   }
        
    
    render() {
        // console.log(this.props.dataCourseProps);
      
        

        return (
            <div>
                {this.showheader()}
                <Bodypage  
                dataTutor={this.state.dataDb}
                dataCourseProps={this.state.data} />
                <Footer/>
            </div>
        );
    }
}

export default Page;

