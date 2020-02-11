import React, {Component} from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import {currentUser} from "../../redux/services/dashboard.services";
import {addToCart, getProducts} from "../../redux/services/shop.services";
import {connect} from "react-redux";

class Template extends Component {
    render() {
        const {children, user, auth} = this.props;
        return (
            <React.Fragment>
                <Header user={user} auth={auth}/>
                {children}
            </React.Fragment>
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
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
