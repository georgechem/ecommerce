import React from 'react';

import './Footer.scss';

const Footer = (props) => {
    const year = (new Date()).getFullYear();
    return (
        <>
            <div className="Footer">Ecommerce {year}</div>
        </>
    );
}
export default Footer;
