import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

import PropTypes from 'prop-types';

import { ramdomImages } from '../../helper/helper'
import { BewariesIcon } from '../BewariesIcon/BewariesIcon'
import { BewariesLabel } from '../BewariesLabel/BewariesLabel'
import styles from "./BewariesGridDetail.module.css"

export const BewariesGridDetail = ({ data }) => {
    return <Grid className={styles.principalSection}>
        <Grid.Column floated='right' width={5}>
            <Image src={ramdomImages()} className={styles.orderBewarieImage} />
        </Grid.Column>
        <Grid.Column floated='left' width={10}>
            <Grid.Row>
                <Grid.Column floated='right' width={5}>
                    <h3 className={styles.detailNameStore}>{data.name}</h3>
                </Grid.Column>
                <Grid.Column floated='left' width={3}>
                    {BewariesLabel(data.brewery_type)}
                </Grid.Column>
            </Grid.Row>
            <Segment.Group className={styles.detailStore}>
                <Segment.Group horizontal>
                    <Segment inverted secondary>{BewariesIcon('phone')} {data.phone ? data.phone : `No Phone`}</Segment>
                    <Segment inverted secondary>{BewariesIcon('mail')} {data.website_url ? <a target="_blank" className={styles.webSiteStore} href={data.website_url}>{data.website_url}</a> : `No Web Info`} </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                    <Segment inverted secondary>{BewariesIcon('map outline')}  {data.country ? data.country : `No Country Found`}</Segment>
                    <Segment inverted secondary>{BewariesIcon('map signs')} {data.street ? data.street : `No Street Found`}</Segment>
                </Segment.Group>

                <Segment.Group horizontal>

                    <Segment inverted secondary>{BewariesIcon('map pin')}{data.city ? data.city : `No City Found`}</Segment>
                    <Segment inverted secondary>{BewariesIcon('map marker alternate')}{data.state ? data.state : `No State Found`}</Segment>
                    <Segment inverted secondary> {BewariesIcon('bar')}{data.postal_code ? data.postal_code : `No ZIP Code Found`}</Segment>
                </Segment.Group>
            </Segment.Group>
        </Grid.Column>
    </Grid>
}

BewariesGridDetail.propTypes = {
    data: PropTypes.object.isRequired
}
