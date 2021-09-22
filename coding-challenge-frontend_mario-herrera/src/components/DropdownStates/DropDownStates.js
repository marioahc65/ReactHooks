import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

import PropTypes from 'prop-types'

import styles from './DropDownStates.module.css'


export const DropDownStates = ({ stateList, setSelectedOption }) => {


    const onChangeState = (e) => {
        setSelectedOption(e.target.textContent)
    }

    const list = stateList;

    const stateOptions = _.map(list, (state,index) => ({
      key: state.abbreviation,
      text: state.name,
      value: state.name
    }))

    return <Dropdown placeholder="All the States"  onChange = { onChangeState } search selection options={stateOptions} className={ styles.listStates } />
}

DropDownStates.propTypes = {
    stateList: PropTypes.array,
    setSelectedOption: PropTypes.func
}
