import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import SubMenu from "./SubMenu";
import {ex_path} from "../../config";

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

    const quantityInCart = (props.userCart.items !== 'undefined'
    ? props.userCart.items.length : 0);

    return (
        <>
            <nav className="Navigation">
                <div
                    onClick={onClickSetMenu}
                    className="Navigation__sub">
                    <i className="fas fa-bars"/>
                </div>
            <NavLink className="Navigation__link" to={ex_path+"/"} exact>home</NavLink>
            <NavLink
                className="Navigation__link" to={ex_path+"/cart"}>cart
                <span className="Navigation__cart">{quantityInCart}</span>
            </NavLink>
                {props.isLogged
                ? <NavLink className="Navigation__link" to={ex_path+"/logout"}>logout</NavLink>
                : <NavLink className="Navigation__link" to={ex_path+"/login"}>login</NavLink>}
        </nav>
            {menu}
        </>


    );
}
export default Nav;
