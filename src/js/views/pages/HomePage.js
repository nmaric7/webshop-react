import React, {Component} from 'react';
import {connect} from 'react-redux';
import {someServiceCall} from './../../redux/services/module1.services';

import bannerBgImage from './../../../images/banner_background.jpg';
import bannerProductImage from './../../../images/banner_product.png';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        someServiceCall: () => {
            dispatch(someServiceCall());
        }
    };
}

class HomePage extends Component {
    render() {
        const {someServiceCall} = this.props;
        return (
            <div className="banner">
                <div className="banner_background" style={{backgroundImage:"url(" + bannerBgImage + ")"}}/>
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="banner_product_image">
                            <img src={bannerProductImage} alt=""/>
                        </div>
                        <div className="col-lg-5 --offset-lg-4 fill_height">
                            <div className="banner_content">
                                <h1 className="banner_text">new era of smartphones</h1>
                                <div className="banner_price"><span>$530</span>$460</div>
                                <div className="banner_product_name">Apple Iphone 6s</div>
                                <div className="button banner_button"><a href="#">Shop Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);