// Main JavaScript file
let galleryContainer = document.querySelector('.gallery-container'),
    imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/t20pc32VbrU/800x600',
  'https://source.unsplash.com/pHANr-CpbYM/800x600',
  'https://source.unsplash.com/3PmwYw2uErY/800x600',
  'https://source.unsplash.com/uOi3lg8fGl4/800x600',
  'https://source.unsplash.com/CwkiN6_qpDI/800x600',
  'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/-hI5dX2ObAs/800x600',
  'https://source.unsplash.com/vZlTg_McCDo/800x600'
];

// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return(
      <img src={this.props.src} alt={this.props.alt} />
    )
  }
}

// Component for gallery
class Gallery extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='container-fluid gallery-container'>
        <div className='row'>
          {
             imgUrls.map(function(url, index) {
               if (index <= 3) {
                 console.log(index);
               }
               return <div className='col-sm-6 col-md-3 col-xl-2'>
                  <div className='gallery-card'>
                    <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                    <GalleryInfo text={index} />
                  </div>
                </div>
             })
           }
          </div>
      </div>
    )
  }
}

// Let's render the whole thing
ReactDOM.render(
  <Gallery imgUrls={imgUrls} />
, galleryContainer);

