import React from 'react';
import Lightbox from 'react-image-lightbox'
import $ from 'jquery';
import {Button, Icon, Modal, Dropdown, Navbar } from 'react-materialize';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className = "header">
        <div className = "logo"></div>
         
         <div className = "searchbox">
            <label>
            <i className=" searchIcon small material-icons">search</i> 
            
            
              <input placeholder = "Find a great place near you"className = "input" type="text" />
            </label>
         </div>
         
         <div>
           <div className = "rightside"><span className = "hoverred">NEW & HOT</span></div>
         </div> 
         <div>
           <div className = "rightside"><span className = "hoverred">CITY'S BEST</span></div>
         </div> 
         <div ><Dropdown style = {{height:'100px'}}
         trigger={
           <div className = "rightside"><span className = "hoverred">SAN FRANCISCO</span></div>
               }>
             
          
            <li>San Francisco</li>  
            <li>Berkeley</li>
            
            <li>Fremont</li>
           
          </Dropdown></div>
        
      </div>
    )

  }
}   

export default Header;