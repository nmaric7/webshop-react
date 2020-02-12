import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        const {user, auth} = this.props;
        const admin = auth.authenticated && auth.user.roles.includes('ROLE_ADMIN');
        return (
            <ul className="standard_dropdown main_nav_dropdown">
                <li>
                    <NavLink to={"/"} activeClassName={"active"} exact={true} className={"nav-link"}>Proizvodi</NavLink>
                </li>
                {auth.authenticated &&
                    <li>
                        <NavLink to={"/orders"} activeClassName={"active"} className={"nav-link"}>Narudžbe</NavLink>
                    </li>
                }
                {admin &&
                    <li>
                        <NavLink to={"/admin/dashboard"} activeClassName={"active"} className={"nav-link"}>Administracija proizvoda</NavLink>
                    </li>
                }
                {auth.authenticated &&
                    <li>
                        {user && user.name}
                    </li>
                }
                {!auth.authenticated &&
                    <li>
                        <NavLink to={"/login"} activeClassName={"active"} className={"nav-link"}>Prijava</NavLink>
                    </li>
                }
                {auth.authenticated &&
                    <li>
                        <NavLink to={"/logout"} activeClassName={"active"} className={"nav-link"}>Odjava</NavLink>
                    </li>
                }


            </ul>
        )
    }
}

Navigation.propTypes = {
};
export default Navigation;