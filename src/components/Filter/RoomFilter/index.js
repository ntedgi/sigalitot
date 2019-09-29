import React, { Component } from 'react'
import Select from 'react-select';

export default class Filter extends Component {

    handleChange = selectedOption => {
        console.log("handleChange")
        this.props.onChange((el) => el.rooms == selectedOption.value)
    }
    render() {

        const roomFilter = [
            { label: 4, value: 4 },
            { label: 5, value: 5 },
            { label: 6, value: 6 }
        ]
      
        return (
            <div>
              
                <h3>room-filter</h3>
                <div className="filter-container">
                    <div className="row">
                        <div className="col-md-4">
                            <Select options={roomFilter}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
