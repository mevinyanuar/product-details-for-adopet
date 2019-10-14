import React, { Component } from "react";
import "./styles.scss";

class ProductDesc extends Component {
  handleButton() {}
  render() {
    return (
      <div>
        <div className="container py-5">
          {/*title*/}
          <div className="row">
            <div className="col-10 mx-auto text-center text slanted text-blue my-5">
              <div className="main-title">
                <h1>Pets Type</h1>
              </div>
            </div>
          </div>
          {/*end of the title*/}
          {/*product info*/}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <img
                src="assets/images/91ab95dd0a1f134e36ea2dca990cea00.jpg"
                className="image-fluid"
                alt="product"
              />
            </div>
            {/*product text*/}
            <div className="col-11 mx-auto col-md-6 my-3 text-capitalize">
              <div className="content-details-pet">
                <h2>Breed: Siberian Husky</h2>
                <h6 className="text-title text-uppercase mt-3 mb-2">
                  Color: Gray/Silver/Salt
                </h6>
                <h6 className="text-title text-uppercase mt-3 mb-2">
                  Age: Adult
                </h6>
                <h6 className="text-title text-uppercase mt-3 mb-2">
                  Size: (when grown) Med. 26-60 lbs (12-27 kg)
                </h6>

                <p className="text-capitalize font-weight-bold mt-3 mb-0 text-center">
                  Pet Description:
                </p>
                <p className="text-muted  text-justify">
                  Tyson is a 2 year-old Husky/Malamute mix who has gone through
                  collar recall training. He is an active guy who needs the same
                  in his forever home. The sweet guy would love to go to the dog
                  park, hiking, etc with his new family. Tyson is ready to go
                  and would love to be an active member of your family. If you
                  would like to meet Tyson, please contact us to ensure he will
                  be at our weekly Saturday adoptions. We are located in LOS
                  ANGELES, CA, we DO NOT adopt outside of the Southern
                  California area (as we require physical homechecks), nor will
                  we ship dogs to other parts of the country, please do not ask.
                </p>
                <h5 className="text-red">
                  <strong>
                    price: <span>Rp</span>17.000.000
                  </strong>
                </h5>

                {/*Cart Button*/}

                <div className="cart">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleButton}
                  >
                    Add To Cart
                  </button>
                </div>

                {/*Cart Button end here*/}
              </div>
            </div>
          </div>
          {/*related products*/}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <div className="related-product">
              <h3>Related Pet</h3>
            </div>

            {/*
            <div className="carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/assets/images/puppy-dog.jpg"
                    alt="First slide"
                    height="300px"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/assets/images/lgpost_1530889382598.jpg"
                    alt="Third slide"
                    height="300px"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/assets/images/2019_04_14_69967_1555214643._large.jpg"
                    alt="Third slide"
                    height="300px"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDesc;
