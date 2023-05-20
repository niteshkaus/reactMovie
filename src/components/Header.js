import React from 'react';
import PropTypes from 'prop-types';

const Header = (props)  => (
  <nav className="header navbar-dark">
    <div className="container">
        <div className="row m-auto">
            <div className="h3 ml-3">{props.title}</div>
        </div>
    </div>
  </nav>
);

Header.defaultProps = {
    title: 'Title'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
