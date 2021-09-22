import React from 'react'
import { BewariesGridDetail } from '../../components/BewariesGridDetail/BewariesGridDetail'
import { useHistory } from 'react-router-dom';
import { BewariesButton } from '../../components/BewariesButton/BewariesButton'
import { Grid } from 'semantic-ui-react'

const DetailPage = (data) => {
    const history = useHistory();

    if (data.location.state === undefined) {
        history.push('/oops')
        return null
    } else {
        const { state } = data.location

        const backClick = () => {
            history.push('/ListStoresPage')
        }
        return (
            <div>
                <BewariesGridDetail data={state} />

                <Grid columns={2} >
                    <Grid.Row>
                        <Grid.Column>
                            <BewariesButton
                                name='Back'
                                iconName='arrow left'
                                onClick = {backClick}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default DetailPage;
