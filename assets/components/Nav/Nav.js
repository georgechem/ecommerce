import React from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = (props) => {
    const isLogged = (props.isLogged
        ? <NavLink className="Navigation__link" to="/logout">logout</NavLink>
        : <NavLink className="Navigation__link" to="/login">login</NavLink>);
    return (
        <>
            <nav className="Navigation">
            <NavLink className="Navigation__link" to="/" exact>home</NavLink>
            <NavLink className="Navigation__link" to="/cart">cart</NavLink>
                {isLogged}
        </nav>
        </>


    );
}
export default Nav;
