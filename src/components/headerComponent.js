import React from 'react';

const HeaderComponent = ({title}) => (
    <nav className="nav-wrapper blue-grey darken-2">
        <a className="brand-logo center">{title}</a>
    </nav>
);

export default HeaderComponent;
