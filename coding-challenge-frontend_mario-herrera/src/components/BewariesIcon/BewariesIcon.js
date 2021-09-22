import React from 'react'
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export const BewariesIcon = ( icon ) => <Icon name= { icon }/>

BewariesIcon.propTypes = {
    icon: PropTypes.string.isRequired
}
