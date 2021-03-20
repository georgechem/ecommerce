import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import SubMenu from "./SubMenu";

import './Nav.scss';

const Nav = (props) => {
    const [menu, setMenu] = useState(null);

    const onClickSetMenu = () => {
        if(menu === null){
            setMenu(<SubMenu/>);
        }else{
            setMenu(null);
        }
    }

    return (
        <>
            <nav className="Navigation">
                <div
                    onClick={onClickSetMenu}
                    className="Navigation__sub">
                    <i className="fas fa-bars"/>
                </div>
            <NavLink className="Navigation__link" to="/" exact>home</NavLink>
            <NavLink className="Navigation__link" to="/cart">cart</NavLink>
                {props.isLogged
                ? <NavLink className="Navigation__link" to="/logout">logout</NavLink>
                : <NavLink className="Navigation__link" to="/login">login</NavLink>}
        </nav>
            {menu}
        </>


    );
}
export default Nav;
