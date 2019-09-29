import React, { Component } from 'react'
import Table, { flatten, unflatten } from "tablex";

export default class Demo extends React.Component {
    generateData(columns, count = 4, prefix = 'Row') {
        return new Array(count).fill(0).map((row, rowIndex) => {
            return columns.reduce(
                (rowData, column, columnIndex) => {
                    if (column.dataIndex !== 'id') {
                        rowData[column.dataIndex] = Math.floor(Math.random() * 100 + 1)
                    } else {
                        rowData[column.dataIndex] =
                            prefix + ' ' + rowIndex + ' - Col ' + columnIndex
                    }
                    return rowData
                },
                {
                    id: prefix + rowIndex,
                    parentId: null,
                },
            )
        })
    }
    constructor(props) {
        super(props)
        const columns = [
        
            {
                dataIndex: 'number',
                key: 'number',
                title: 'number',
                width: 100,
            },
            {
                dataIndex: 'floor',
                key: 'floor',
                title: 'floor',
                width: 100,
            },
            {
                dataIndex: 'rooms',
                key: 'rooms',
                title: 'rooms',
                width: 150,
                align: 'center',
            },

            {
                dataIndex: 'discription',
                key: 'discription',
                title: 'discription',
                align: 'right',
            },
            {
                dataIndex: 'price',
                key: 'price',
                title: 'price',
                width: 100,
                align: 'center',
            },
        ]
        this.state = {
            data: [{ "price": 1, "discription": 0,"rooms":0, "number":0}],
            columns: columns,
        }
    }
    render() {
        let { columns } = this.state
        let data = this.props;
        return <Table rowKey="id" columns={columns} data={data.data} />
    }
}