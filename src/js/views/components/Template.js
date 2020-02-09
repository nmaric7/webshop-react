import React, {Component} from 'react';
import Header from "./Header";

class Template extends Component {
    render() {

        const {children} = this.props;

        return (
            <React.Fragment>
                <Header/>

                {children}

                <footer className={"footer"}></footer>

            </React.Fragment>
        );
    }
}

export default Template;