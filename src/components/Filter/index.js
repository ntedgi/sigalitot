import React, { Component } from 'react'
import Select from 'react-select';
import RoomFilter from './RoomFilter'
import FloorFilter from './FloorFilter'
export default class Filter extends Component {

    handleChange = selectedOption => {
        console.log("handleChange")
        this.props.onChange((el) => el.floor == selectedOption.value)
    }
    render() {
        return (<div>
            <h1>Filter</h1>

            <RoomFilter onChange={this.props.onChange}></RoomFilter>
            <FloorFilter onChange={this.props.onChange}></FloorFilter>
        </div>)
    }
}
