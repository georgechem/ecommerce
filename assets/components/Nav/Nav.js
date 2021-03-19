import React from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = (props) => {
    return (
        <>
            <nav className="Navigation">
            <NavLink className="Navigation__link" to="/" exact>home</NavLink>
            <NavLink className="Navigation__link" to="/cart">cart</NavLink>
            <NavLink className="Navigation__link" to="/login">login</NavLink>
        </nav>
        </>


    );
}
export default Nav;
