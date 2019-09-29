import React, { Component } from 'react'
import DataTable from '../DataTable'
import style from './style.scss'
export default class Building extends Component {
    render() {
        const { region_name, region_imaging_pdf, building, filterfn } = this.props
        return (
            <div className="building">
                <h1>{region_name}</h1>
                {building.map(element => {
                    return <DataTable key={element.b_title} {...element} filterfn={filterfn}></DataTable>
                })}
            </div>
        )
    }
}
