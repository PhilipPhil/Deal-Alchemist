import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Loading from "./Loading"
import Card from "./Card"

const Tittle = (props) => {
    return (
        <Row className="form-group justify-content-center mb-4" style={{ "backgroundColor": "rgb(0, 123, 255,0.06)", "border": "1px solid rgba(0,0,0,.125)", "padding": "15px", "border-radius": ".05rem" }}>
            <Col className="col-12 text-center">
                <h1>Favorites <img style={{ "vertical-align": "sub" }} src='/assets/images/logo.png' height="60" width="60" alt='Deal Alchemist' /></h1>
                <h2 className="text-muted">{props.username}</h2>
            </Col>
        </Row>

    )
}



class Favorites extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="container py-4">
                    <Tittle username={"Loading..."} />
                    <div class="row">
                        <Loading />
                    </div>
                </div>
            )
        } else if (this.props.errMess) {
            return (<Redirect exact to='/' />);
        }


        else if (this.props.favorites != null) {
            const menu = this.props.favorites.deals.map((deal) => {
                if (!this.props.isReviewsLoading && !this.props.reviewsErrMess) {
                    var rating = 0
                    var reviewsWithId = this.props.reviews.filter((review) => review.deal === deal._id)
                    var n = Math.min(reviewsWithId.length, 100);
                    if (n > 0) {
                      for (let i = 0; i < n; i++) {
                        rating = rating + reviewsWithId[i].rating
                      }
                      rating = rating / n
                    }
                    return (
                        <Card deal={deal}
                            auth={this.props.auth}
                            favorites={this.props.favorites}
                            isFavoritesLoading={this.props.isFavoritesLoading}
                            favoriteserrMess={this.props.favoriteserrMess}
                            deleteFavorite={this.props.deleteFavorite}
                            postFavorite={this.props.postFavorite}
                            fromFavorites={true}
                            rating={rating}
                        />
                    );
                }


            });
            return (
                <div className="container py-4">
                    <Tittle username={this.props.favorites.user.name} />
                    <div class="row">
                        {menu}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container py-4">
                    <Tittle username={""} />
                    <div class="row">
                    </div>
                </div>
            );
        }

    }
}

export default Favorites;