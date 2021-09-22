import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from './BewariesButton.module.css'

export const BewariesButton = ({name, iconName, onClick}) => (
    <div>
      <Button animated className={styles.backToList} onClick={() => onClick()}>
        <Button.Content visible>{name}</Button.Content>
        <Button.Content hidden>
          <Icon name={iconName} />
        </Button.Content>
      </Button>
    </div>
  )

  BewariesButton.propTypes = {
      name: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired
  }
