import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-image-lightbox'
import $ from 'jquery';
import {Button, Icon, Modal} from 'react-materialize';
import OpeningPageGalleryView from './openingGrid.jsx';
import FullGalleryOpenGrid from './fullGalleryOpenGrid.jsx';
   
//we also need to make the opening view of the gallery that takes first 6 photos

	//takes the id and makes ajax get request to the server 
	//to get the file that contains all the images 
	//corresponding to a particular restaurant
	//once we get the file from the server, we give it to client
	//to render it to the app.
class ApateezGallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photoIndex:0,
      isOpen:false,
      images: [],
      restaurantName:"",
      fullGalleryGrid :false 
    };
    this.getRequestWithId = this.getRequestWithId.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
    this.clickView = this.clickView.bind(this);
  }
  componentDidMount(){
    //ajax request for getting the photos and name of restaurant 
    this.getRequestWithId(); 
  }
  getRequestWithId(){
    var appContext = this;
    $.ajax({url: "/ChIJFUBxSY6AhYARwOaLV7TsLjw", 
            method: "GET", 
            success: function(data){
              appContext.setState({images: data.photoArray, restaurantName: data.restaurantName});
            }
    });
  }
  clickHandle(clickedIndex){
    this.setState({ isOpen: true, photoIndex: clickedIndex });
  }

  clickView(){
    this.setState({fullGalleryGrid: true});
  }
  render(){
     const { photoIndex, isOpen, images, fullGalleryGrid } = this.state;
         return (
      <div>
          <OpeningPageGalleryView images = {images} clickHandle = {this.clickHandle} clickView = {this.clickView}/>
        
        {isOpen && <i className=" cancel medium material-icons ">cancel</i> } 
        {fullGalleryGrid && (<FullGalleryOpenGrid images = {images} clickHandle = {this.clickHandle}/>)}
 
        {isOpen && (

          <Lightbox
            
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
} 
	
ReactDOM.render(< ApateezGallery/>, document.getElementById('app'));


     //  <i className=" cancel medium material-icons ">cancel</i>
     // <i className=" apps medium material-icons right-align">apps</i>
     //<FullGalleryOpenGrid images = {images} clickHandle = {this.clickHandle}/>

