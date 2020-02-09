import React, {Component} from 'react';
import {connect} from 'react-redux';
import {currentUser} from './../../redux/services/dashboard.services';

import bannerBgImage from './../../../images/banner_background.jpg';
import bannerProductImage from './../../../images/banner_product.png';
import Header from "../components/Header";
import Navigation from "../components/Navigation";

class DashboardPage extends Component {

    componentDidMount() {
        const {currentUser} = this.props;
        currentUser();
    }

    render() {
        const {user, auth} = this.props;
        return (
            <div>
                <Navigation user={user} auth={auth}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.user,
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        currentUser: () => {dispatch(currentUser());}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);