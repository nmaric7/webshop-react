import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../redux/services/auth.services';
import PropTypes from 'prop-types';

import Login from "../components/Login";
import {Redirect, Link} from 'react-router-dom';

class LoginPage extends Component {

    render() {
        const {onLogin, authenticated, error} = this.props;

        if (authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }}/>;
        }

        return (
            <div className={'container login-page'}>
                <h2 className={'text-center'} style={{'padding': '20px'}}>
                    <span className={'font-weight-bold'}>Webshop</span>.com
                </h2>
                <h3>Dobro došao, nazad!</h3>
                {error && error.message &&
                <div className="alert alert-danger">
                    <strong>Error!</strong> {error.message}
                </div>
                }
                <Login onLogin={onLogin} />
                <Link to={'/signup'}>Registracija</Link>
            </div>
        )
    }
}

LoginPage.propTypes = {
    onLogin: PropTypes.func,
    authenticated: PropTypes.bool,
    error: PropTypes.object
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {onLogin: (request) => dispatch(login(request))};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);