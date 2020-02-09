import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class SomePage2 extends Component {
    render() {
        return (
            <div>
                SomePage 2
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(SomePage2);