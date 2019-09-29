import React, { Component } from 'react'
import Demo from './example'

export default class DataTable extends Component {
    prapareData = (apartments, filterfn) => {
        let result = []
        debugger
        if (filterfn) {
            let data = apartments.filter(e => filterfn(e))
            data.forEach(element => {
                const { aptype, floor, free_text, price, rooms, availble } = element
                if (price > 0 && availble)
                    result.push({ "price": price, floor: floor, "discription": free_text, "rooms": rooms, "number": aptype })
            });
        }
        else {
            apartments.forEach(element => {
                const { aptype, floor, free_text, price, rooms, availble } = element
                if (price > 0 && availble)
                    result.push({ "price": price, floor: floor, "discription": free_text, "rooms": rooms, "number": aptype })
            });
        }
        return result

    }
    constructor(props) {
        super(props)
    }

    render() {
        const { b_title, apartments,filterfn } = this.props
        const formated = this.prapareData(apartments,filterfn)
        return (
            <div>
                <h2 key={`${b_title}1`}>{`building number :${b_title}`}</h2>
                <h2 key={`${b_title}2`}>{`availble apartments ${formated.length}`}</h2>
                <Demo  data={formated} />
            </div>
        )
    }
}
