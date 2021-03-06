import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Loading from "./Loading"

class Comments extends Component {

    constructor(props) {
        super(props);
        this.renderReview = this.renderReview.bind(this);
    }

    renderReview(review) {
        return (
            <div class="mb-4 col-12 col-md-8 offset-md-2 text-center">
                <div class="row">
                    <div class="col-21 col-sm-6 text-left">
                        <h4 style={{ marginBottom: 0 }}>{review.author.name}</h4>
                        <small style={{ marginBottom: 0 }} class="text-muted">{review.date}</small>
                    </div>
                    <div class="col-12 col-sm-6 text-left text-sm-right">
                        <StarRatings rating={parseInt(review.rating, 10)} starSpacing="2px" starRatedColor="gold" starDimension="1.5rem" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-left">
                        <small class="mb-2">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(review.updatedAt)))}</small>
                        <p>{review.comment}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {


        if (this.props.isReviewsLoading) {
            return (<div className="container py-4">
              <div class="row">
                <Loading />
              </div>
            </div>)
      
          } else if (this.props.reviewsErrMess) {
            return (<div className="container py-4">
              <div class="row text-center">
                <h4>{this.props.reviewsErrMess}</h4>
              </div>
            </div>)
      
          } else {
            return (
                <React.Fragment>
    
                    <div class="text-center" id="review-section">
                        {this.props.reviews.map((review) => this.renderReview(review))}
                    </div>
    
                </React.Fragment>
    
            )
        }

    }



}




export default Comments;