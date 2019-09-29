import React, { Component } from 'react'
import Select from 'react-select';

export default class FloorFilter extends Component {

    handleChange = selectedOption => {
        console.log("handleChange")
        this.props.onChange((el) => el.floor == selectedOption.value)
    }
    render() {

        const filterFloor = [
            { label: 0, value: 0 },
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 },
            { label: 6, value: 6 },
        ];
        return (
            <div>
                <h3>floor-filter</h3>
                <div className="filter-container">
                    <div className="row">
                        <div className="col-md-4">
                            <Select options={filterFloor}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
