import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({title}) => (
    <nav className="nav-wrapper blue-grey darken-2">
        <a href="#!" className="brand-logo center">{title}</a>
    </nav>
);

HeaderComponent.propType = {
    title : PropTypes.string.isRequired
}

export default HeaderComponent;
