import React from 'react';
import PropTypes from 'prop-types';

export const BewariesHeader = ({text,className}) => {
    return <h1 className={className}>{text}</h1>;
}

BewariesHeader.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}