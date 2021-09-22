import React from 'react'
import { Popup } from 'semantic-ui-react'

import PropTypes from 'prop-types'

import { FixedText } from  '../../helper/helper'

export const BewariesTooltip = ({ text, maxLength }) => {
    const textConvert = FixedText(text, maxLength)

   return <Popup
    trigger={(<span> { textConvert } </span>)}
    content= { text }
    basic
  />
}

BewariesTooltip.propsTypes = {
    text: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired
}
