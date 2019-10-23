import React, { Component, useState } from 'react'

export default class MorgageData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      years: 25,
      rate: 0.0416,
      myMoney: 300000
    }
  }
  handleChange = value => this.setState(value)

  render () {
    const { changeData } = this.props
    const { years, rate, myMoney } = this.state
    return (
      <div>
        rate:
        <input
          value={rate}
          onChange={event => this.handleChange({ rate: event.target.value })}
        />
        years:
        <input
          value={years}
          onChange={event => this.handleChange({ years: event.target.value })}
        />
        myMoney:
        <input
          value={myMoney}
          onChange={event => this.handleChange({ myMoney: event.target.value })}
        />
        <button
          type='button'
          onClick={() =>
            changeData({ years: years, rate: rate, myMoney: myMoney })
          }
        >
          Click Me!
        </button>
      </div>
    )
  }
}
