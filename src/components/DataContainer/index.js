import React, { Component } from 'react'

import data from '../../mock/data'
import Building from './../Building'
import Separator from './../Seprator'
import style from './style.scss'
export default class DataContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data:data
        }
    }

    render() {

        
        console.log(data)   
        return (
            <div className="main-container">
                <Building {...this.state.data[0][0]}></Building>
                <Separator></Separator>                
                <Building {...this.state.data[0][1]}></Building>                 
            </div>
        )
    }
}

