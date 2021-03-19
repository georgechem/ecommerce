import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <>
            <NavLink to="/">home</NavLink>
            <NavLink to="/cart">cart</NavLink>
        </>


    );
}
export default Nav;
