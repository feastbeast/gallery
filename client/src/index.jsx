import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-image-lightbox'
var images = ["//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAAS-_yT79-xOEidWWdGLWodXs7VimXhvO7MnCm-5-vzgn4hJ3xcgrOS6hBLcHBSJoimq4EcEXI-aI3lQuIVmYq_6l35yWnIt0DubAF3Z62hGcmUcCGUjFUkwtEb5FAlRAOEhB9cvtPXo6KiaSFlnXw6cHNGhRhFJSzb2FEdQkLxuQD3dQ4OtXYOg.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAAdkPILxN_gxksH0G6oNxuSV1fi5a-G2qK9qKy4Cy3pSrU94QKIoIgvY3vIfeLTWQj4BJ6fAHSGajJxKo4dRDa61FXRYXes1cfTbTOVUNY0m0IefaEIdxFM7OAvFuPtXn3EhBOLVr33o9mfkngMYLxlKYhGhRgKq83zArriePrdJI3ToJHt_m-WQ.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAA8fTeDjslGhiT-nCLbZu9D1lFM7Bc0u_KnzdOoWxlqAQWU2P7yD27cFP5o29DKUTRhyySZ-rEC1FxPbvMVAD5LaxJUqCtrRUQxv0qeGkerrKR9NBwRT7fm-RS2tSsEyOhEhB26gmmBE7gq2d1p5Hoo9NVGhS2c74zbrmfkrLeAN2zb_c7GiuLhA.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAAz3rg8FNl4_mNzT1Uybgl9cSTqdEmxMWXVgU06PnDBpptLFhYxCf3hVkUM06GjejQJbkB3r8tpuQb4wJExSIYkCBoY2A-9-N0LtPgEIVVdXF03jL6rghjs8nxlfxeJbCEEhBUwPjwfsF9nt8b8zk1vuEbGhREDqgr_WL8nrHMGwc_ITrPgxZ8UA.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAABmE2Wc6-QGvWUeVWCg_PoeodQRsN7ZKrhQRdy-ddgQqkoZMqEny1fsGn-XDv_085nORdwMrdrYUuxQqQZuAC-81VPxJz7sbnR9-ZcL91n5g2v1Z2m6BHQ1e_2iSSNPcvEhDjEing2pXSuwWpw5__hOkzGhTBg8nuP5JD4olKs-wV38GdM0erdA.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAAIV8he3_1E-1It4_VwD5PUGkG4GAA-wuAe3syoOja7AnVAvv4hEVGCA3FtuaUqq-myvRhZBLTGG9PWYlIOy5BT8CBu2sKPEE7aHvwUwz5WZovVigeSP4Z7SmlUU_uqQSZEhByjBf9uyBS8feXt5A8BA5lGhQbDF1TDCXRL_oKfX9oGg1mFZLaEg.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAAGGEE2dSHoIOscdw82mCVAY6CjuU5ei6YdHm4BdzFqTxdVSr-R1zjpVJlHA7-d8a8RVdEQV-nMAWgz-sZB1SuyTTwnGwTtbzHZ--H0VPeODJCglgT0z8eK6-VtoO73GJ4EhD8H9bt3pSmMBg2NEJR_IZoGhSs6CT0vqmpC_mWuAB3kRfu6sOaeA.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAAzOP_5p4aPDlhOfRpB5trmXcJHJ3oe8C-mrP0FlLxPQuaOVV32cHrY9pDdboTMdaFINIZ2XE1R1LK5QtPpHjJWqO8yM8V5G1cdkhuSHB1f0mQt8aI-v1FM-mUHsDME_HwEhDgPIsWGnKYnYvj9wSirdW_GhSOo7TN3ot9EgQhg3n_C6HGStbWBA.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAACLCKd652knKgbm5beur5uYW9GBkBhEVoCmJBGzaduAPsbnxYiqF6NpREjUep5IA6DxZC9WHmaoBghTTLUEg18LwHdQWYYaY6gbjoBu9gGvbIqrFqjgxSWwhtzr-RUg2KEhDYN2TK7LvCpufBUwU9aAcmGhQdQdnkDEVFB3US4OeMk92BXhgA5Q.png",
"//s3-us-west-1.amazonaws.com/apateezgallery/CmRaAAAADJ1U26EzK8mSa2_WE49eS-1Nm37ZTlmsQ2JakB6Wfzh5gXmsNZnJUTIDTULUavpct_ifGXgvirH69KJJccbTqW2WVD7wgp_i4aLmDGtFVGpQcfVtozSmUHxOsmSeGh3-EhAiq8VasGZPJXtOvR9ITRFAGhTwjz2sp2xwPQx7E8eRekcoKmkR2w.png"]


//closed grid view with first 6-8 photographs on the front page
   //side small transparent box showing the number of total photos with + sign
//opened gallery grid view with all the photographs of selected restaurant
  // restaurant name on the top, cross on the top right to close and a scroller bar on the rigth
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
			isOpen:false
		};
	}

	render(){
		 const { photoIndex, isOpen } = this.state;
         return (
      <div>
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


	//takes the id and makes ajax get request to the server 
	//to get the file that contains all the images 
	//corresponding to a particular restaurant
	//once we get the file from the server, we give it to react lightbox code
	//to render it to the app.

	//we also need to make the opening view of the gallery that takes first 6 photos


ReactDOM.render(< ApateezGallery />, document.getElementById('app'));

