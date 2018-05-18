import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-image-lightbox';
import { Button, Icon } from 'react-materialize';
import Modal from 'react-modal';
import axios from 'axios';
import OpeningPageGalleryView from './components/openingGrid.jsx';
import FullGalleryOpenGrid from './components/fullGalleryOpenGrid.jsx';
import Header from './components/header.jsx';
import Social from './components/social.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [],
      restaurantName: '',
      fullGalleryGrid: false,
      place_id: '0',
    };
    this.getRequestWithId = this.getRequestWithId.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
    this.clickView = this.clickView.bind(this);
    this.clickHandleView = this.clickHandleView.bind(this);
    this.searchRestaurant = this.searchRestaurant.bind(this);
  }
  componentDidMount() {
    const id = window.location.href.split('restaurants/')[1];
    if (typeof(window) !== 'undefined') {
      this.getRequestWithId(id);
    }
  }

  getRequestWithId(id) {
    axios.get(`http://18.205.188.67:80/api/restaurants/${id}/gallery`)
      .then(({ data }) => {
        this.setState({ images: data.photoArray, restaurantName: data.restaurantName, place_id: data.place_id });
      })
      .catch(err => console.error(err));
  }

  searchRestaurant(searchValue) {
    axios.get("http://18.205.188.67:80/" + searchValue)
    .then(({data}) => { 
      location.href = '/restaurants/' + data.place_id;
    })
    .catch((err) => console.error(err));
  }

  gotoHotNew() {
    location.href = '/restaurants/' + '1' ;
  }
  gotoCitysBest() {
    location.href = '/restaurants/' + '2';
 }

  clickHandle(clickedIndex) {
    this.setState({ isOpen: true, photoIndex: clickedIndex });
  }
  clickHandleView() {
    this.setState({ isOpen: false, fullGalleryGrid: true });
  }

  clickView() {
    this.setState({ fullGalleryGrid: !this.state.fullGalleryGrid });
  }
  render(){
    
     const { photoIndex, isOpen, images, fullGalleryGrid, restaurantName } = this.state;
         return (
      <div>
       <Social/>

        <Header searchRestaurant = {this.searchRestaurant} gotoHotNew = {this.gotoHotNew} gotoCitysBest = {this.gotoCitysBest}/>

            <div>
              <Modal isOpen={fullGalleryGrid} 
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(16,24,32,.95)',
                    zIndex: 3
                  },
                  content: {
                    position: 'absolute',
                    top: '10px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '0px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '0px',
                    backgroundColor: 'rgba(28, 22, 22, 0.29)',
                    zIndex:3

                  }
                  
                }}
              >
                <div className = "restaurantName">{restaurantName.toUpperCase()}</div>
                <FullGalleryOpenGrid images = {images} clickHandle = {this.clickHandle}/>
                <i className=" cancel small material-icons " onClick = {this.clickView}>cancel</i>
              </Modal>
            </div>
          <OpeningPageGalleryView images = {images} clickHandle = {this.clickHandle} clickView = {this.clickView}/>
               

        {isOpen && (
          <div>

          <Lightbox
            enableZoom= {false}
            toolbarButtons={ [ <span className = "restaurantN">{restaurantName.toUpperCase()}</span>, <span className = "photoNum">{(photoIndex+1)+ " of "+ images.length}</span>, <i onClick = {this.clickHandleView } className="ril__toolbarItem apps small material-icons">apps</i>] }
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
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;

