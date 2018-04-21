import React from 'react';
import $ from 'jquery';
import {Button, Icon, Modal, Dropdown, Navbar } from 'react-materialize';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: true}
    this.changeView = this.changeView.bind(this);
  }

  changeView(){
    this.setState({
      view:!this.state.view
    })
  }

  render() {
    if(this.state.view){
      return (
      <BigDiv changeView = {this.changeView}/>
      )
    }else{
      return (
      <SmallDiv changeView = {this.changeView}/>
      )
    }
    
    

  }
}   

class BigDiv extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      
      <div className = "social">
         <i className="floating medium fab fa-twitter"></i>
         <i className="medium fab fa-pinterest"></i> 
         <i className="medium fab fa-google-plus"></i>
         <i className="medium fas fa-envelope"></i>
         <i className="medium far fa-times-circle" onClick = {this.props.changeView}></i>   
      </div>
      )
  }
}  
class SmallDiv extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      
      <div className = "smallsocial">
         <i className="floating medium fab fa-twitter"></i>
         <i className="medium fab fa-pinterest"></i> 
         <i className="medium fas fa-envelope"></i>
         <i className="medium fas fa-ellipsis-h" onClick = {this.props.changeView}></i>   
      </div>
      )
  }
}   

export default Social;