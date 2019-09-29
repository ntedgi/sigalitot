import React, { Component } from 'react'

import data from '../../mock/data'
import Building from './../Building'
import Separator from './../Seprator'
import style from './style.scss'
import Filter from './../Filter'
export default class DataContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: data,
            filterfn: () => true
        }
    }

    onFilterSelected = (fn) => {
        this.setState({ filterfn: fn })
    }
    render() {
        console.log(data)
        return (
            <div>
                <Filter onChange={this.onFilterSelected} />
                <div className="main-container">
                    <Building {...this.state.data[0][0]} filterfn={this.state.filterfn}></Building>
                    <Separator></Separator>
                    <Building {...this.state.data[0][1]} filterfn={this.state.filterfn}></Building>
                </div>
            </div>
        )
    }
}

