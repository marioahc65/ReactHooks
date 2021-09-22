import React from 'react'
import { Pagination } from 'semantic-ui-react'
import styles from './BewariesPagination.module.css'
import PropTypes from 'prop-types';



export const BewariesPagination = ({defaultActivePage,totalPages, onClick}) => (
  <Pagination
    className={styles.BewariesCountPages}
    defaultActivePage={defaultActivePage}
    firstItem={'<<First'}
    lastItem={'Last>>'}
    pointing
    secondary
    totalPages={totalPages}
    onPageChange = {onClick}
  />
)

BewariesPagination.propTypes = {
    defaultActivePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}