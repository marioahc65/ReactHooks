import React from 'react'
import { Container, Header } from 'semantic-ui-react';
import HomePage from '../HomePage'
import DetailPage from '../DetailPage'
import ListStoresPage from '../ListStoresPage';
import NotFound from '../NotFound'

import logo01 from '../../images/logo01.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './index.module.css';

export default function App() {
    return (
        <>
            <div className={styles.divIndex}>
                <Header className={styles.logoDesign}>
                    <a href="#"><img src={logo01} alt="logo" /></a>
                </Header>
                <Container>

                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/ListStoresPage" component={ListStoresPage} />
                                <Route path="/DetailPage" component={DetailPage} />
                                <Route component={NotFound} />
                            </Switch>
                        </BrowserRouter>
                </Container>
            </div>

        </>

    )
}
