import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/services/auth.services';
import PropTypes from 'prop-types';


import {Redirect, Link} from 'react-router-dom';

class LogoutPage extends Component {

    componentDidMount() {
        const {onLogout} = this.props;
        onLogout();
    }

    render() {
        const {onLogin, authenticated} = this.props;

        if (!authenticated) {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }}/>;
        }

        return (
            <h1>Thank you for using webshop.com</h1>
        )
    }
}

LogoutPage.propTypes = {
    onLogout: PropTypes.func,
    authenticated: PropTypes.bool
};

function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated};
}

function mapDispatchToProps(dispatch) {
    return {onLogout: () => dispatch(logout())};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutPage);