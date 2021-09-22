import _ from 'lodash'
import React from 'react'
import { Label } from 'semantic-ui-react'
import PropTypes from 'prop-types';


const asingColor = (type) => {
    switch (type) {
        case 'micro':
            return 'red'

        case 'nano':
            return 'orange'

        case 'regional':
            return 'yellow'

        case 'brewup':
            return 'olive'

        case 'large':
            return 'green'

        case 'planning':
            return 'teal'

        case 'bar':
            return 'blue'

        case 'contract':
            return 'violet'

        case 'proprietor':
            return 'purple'

        case 'closed':
            return 'pink'

        default:
            return 'brown'
    }
}

export const BewariesLabel = (type) => {
    const color = asingColor(type)
    return (
        <div>
            <Label color={color} key={color}>
                {_.capitalize(type)}
            </Label>
        </div>)
}

BewariesLabel.propTypes = {
    type: PropTypes.string.isRequired
}
