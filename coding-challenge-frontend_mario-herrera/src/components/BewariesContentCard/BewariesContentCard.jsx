import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { BewariesIcon } from '../BewariesIcon/BewariesIcon'
import { ramdomImages } from '../../helper/helper'

import { BewariesTooltip } from '../BewariesTooltip/BewariesTooltip'

import styles from './BewariesContentCard.module.css'

export const BewariesContentCard = ({ name = 'Juan', phone = '432423423', city = 'San Diego' }) => {
  return (
    <>
      <Image src={ramdomImages()} wrapped ui={false} className={styles.ImgSize} />
      <Card.Content>
        <Card.Header className={styles.NameStore}>
          <BewariesTooltip
            text={name}
            maxLength={13}
          />
        </Card.Header>


        <Card.Meta>
          {phone ? (<> <p>{BewariesIcon('call')} {phone} </p> </>) : (<>  <p>{BewariesIcon('frown outline')} No Phone</p></>)}
        </Card.Meta>
        <Card.Description>
          {BewariesIcon('map marker alternate')} <BewariesTooltip
            text={city}
            maxLength={13}
          />
        </Card.Description>
      </Card.Content>
    </>)
}

BewariesContentCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  city: PropTypes.string.isRequired
}