import React from 'react'
import { Card } from 'semantic-ui-react'

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { BewariesContentCard } from '../BewariesContentCard/BewariesContentCard'
import styles from './BewariesColumnCards.module.css'





export const BewariesColumnCards = ({ data }) => {
    const history = useHistory();
    const detailClick = (item) => {
        history.push({
            pathname: '/DetailPage',
            state: item
        })
    }
    const myArrCreatedFromMap = data?.map((item) =>
    (<Card className={styles.organizeItem} key={item.id} onClick={() => detailClick(item)}>

        <BewariesContentCard
            name={item.name}
            phone={item.phone}
            city={item.city}
        />
    </Card >)
    );
    return <Card.Group itemsPerRow={3}>
        {myArrCreatedFromMap}
    </Card.Group>
}

BewariesColumnCards.propTypes = {
    data: PropTypes.array.isRequired
}