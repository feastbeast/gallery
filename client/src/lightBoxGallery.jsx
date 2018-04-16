// slide show of the gallery
  //restaurant name on top
  //grid-type icon on the top right- clicking on which opens the opened grid gallery view
  //says which number photograph from total number on the top right 
  //cross on the top right to close and bring back to firt page 

class ApateezGallery extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			photoIndex:0,
			isOpen:false,
      images: [],
      restaurantName:"" 
		};
    this.getRequestWithId = this.getRequestWithId.bind(this);
	}
  componentDidMount(){
    //ajax request for getting the photos and name of restaurant 
    this.getRequestWithId(); 
  }
  getRequestWithId(){
    var appContext = this;
    $.ajax({url: "/ChIJN2S4EI2AhYAR9J4Qeh1U8Aw", 
            method: "GET", 
            success: function(data){
              appContext.setState({images: data.photoArray, restaurantName: data.restaurantName});
            }
    });
  }

	render(){
		 const { photoIndex, isOpen, images } = this.state;
         return (
      <div>
      
     <i className=" cancel medium material-icons ">cancel</i>
     <i className=" apps medium material-icons right-align">apps</i>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
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