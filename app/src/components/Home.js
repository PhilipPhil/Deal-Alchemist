import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const CarouselComponent = () => {
  return(<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/discover.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Discover</h3>
        <p>Find the best deals in your area.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/community.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Community</h3>
        <p>Connecting patrons to local businesses.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/join.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Join</h3>
        <p>Grow with the deal alchemist community.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>)
}


const HomeBodyComponent = () => {
  return(
    <div class="container marketing py-4">
    <div class="row justify-content-center">
      <div class="col-lg-4 text-center">
        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
        <h2>Deal Alchemist</h2>
        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
      </div>
      <div class="col-lg-4 text-center">
        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
        <h2>Deal Alchemist 2</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
      </div>
      <div class="col-lg-4 text-center">
        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
        <h2>Deal Alchemist 3</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 align-self-center">
        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" src="assets/images/500x500.jpg" alt="Generic placeholder image" />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2 align-self-center">
        <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="featurette-image img-fluid mx-auto" src="assets/images/500x500.jpg" alt="Generic placeholder image" />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 align-self-center">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" src="assets/images/500x500.jpg" alt="Generic placeholder image" />
      </div>
    </div>

  </div>
  )
}



class Home extends Component {

  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render(){
    return(

      <React.Fragment>

        <CarouselComponent />

        <HomeBodyComponent />

      </React.Fragment>
    );
  }

}

export default Home;   