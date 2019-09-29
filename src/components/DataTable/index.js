import React, { Component } from 'react'
import Demo from './example'

export default class DataTable extends Component {
    prapareData = (apartments) => {
        let result = []
        apartments.forEach(element => {
            const {aptype,floor,free_text,price,rooms,availble} = element
            debugger
            if(price>0 &&availble)
            result.push({ "price": price, floor:floor, "discription": free_text, "rooms": rooms, "number": aptype })
        });
        return result

    }
    constructor(props) {
        super(props)
    }

    render() {
        const { b_title, apartments } = this.props
        const formated = this.prapareData(apartments)
        return (
            <div>
                <h2>{b_title}</h2>
                <h2>{`availble apartments ${formated.length}`}</h2>
                <Demo data={formated} />
            </div>
        )
    }
}
