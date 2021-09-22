import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { BewariesHeader } from '../../components/BewariesHeader/BewariesHeader'

import styles from './HomePage.module.css'

const HomePage = () => {
    return <div>

        <Grid columns={2} className={styles.principalSection}>
            <Grid.Row >
                <Grid.Column floated='right' width={11}>
                    <BewariesHeader text='Here are a list of breweries' className = {styles.DirectMessage}/>
                    
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column floated='right' width={3}>
                    <Link to='/ListStoresPage' className={styles.hoverUnderlineAnimation}>Breweries</Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
}

export default HomePage;