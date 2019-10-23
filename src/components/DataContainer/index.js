import React, { Component } from 'react'

import style from './style.scss'
import FilterTable from './../FilterTable'
import MorgageData from './../MorgageData'
import migrash from './../../images/migrash.png'

export default class DataContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      types: [],
      data: [],
      years: 25,
      rate: 0.0416,
      myMoney: 300000
    }
  }

  componentDidMount () {
    fetch(
      '/%D7%AA%D7%9B%D7%A0%D7%99%D7%95%D7%AA-%D7%93%D7%99%D7%A8%D7%94/?json',
      {
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        mode: 'cors'
      }
    )
      .then(response => {
        return response.text()
      })
      .then(data => {
        this.setState({
          data: JSON.parse(data)[0],
          types: JSON.parse(data)[4]
        })
      })
  }
  changeProp = obj => {
    this.setState(obj)
  }

  avgReturn = needToTake => {
    // 0.04 rate per year
    // 12 payments per year (each mounth)
    const ir = this.state.rate / 12
    const np = this.state.years * 12
    const pv = needToTake
    return this.PMT(ir, np, pv).toFixed(2) * -1
  }

  PMT = (ir, np, pv, fv, type) => {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif

    fv || (fv = 0)
    type || (type = 0)

    if (ir === 0) return -(pv + fv) / np

    pvif = Math.pow(1 + ir, np)
    pmt = (-ir * pv * (pvif + fv)) / (pvif - 1)

    if (type === 1) pmt /= 1 + ir

    return pmt
  }
  morgageSummary = (price, precent) => {
    const needToBring = parseInt(price * precent) // הון עצמי
    const needToTake = price - needToBring // משכנתא
    const returnPerMounth = this.avgReturn(needToTake)
    return `
        ${this.numberWithCommas(needToBring)} חסכונות \
        משכנתא ${this.numberWithCommas(needToTake)}  \
        החזר חודשי ${returnPerMounth}   \
        ריבית ${(
      returnPerMounth * 12 * this.state.years -
          needToTake
    ).toFixed()}  \ מחיר סופי 
        ${(
      returnPerMounth * 12 * this.state.years +
          needToBring
    ).toFixed()} \
        `
  }

  morgageSummaryWithMyMoney = price => {
    const needToBring = parseInt(this.state.myMoney)
    const needToTake = price - needToBring // משכנתא
    const returnPerMounth = this.avgReturn(needToTake)
    const finalPrice = parseInt(returnPerMounth * 12 * this.state.years + needToBring) 
    const ribit = parseInt(returnPerMounth * 12 * this.state.years - needToTake)
    debugger
    return `${this.numberWithCommas(needToBring)} חסכונות \
        משכנתא ${this.numberWithCommas(needToTake)}  \
        החזר חודשי ${returnPerMounth}   \
        ריבית ${ribit}  \ מחיר סופי${finalPrice}  \
    `
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  prapareData = (apartments, yard, building) => {
    let result = []
    const types = this.state.types.typesArray

    apartments.forEach(element => {
      const {
        aptype,
        floor,
        free_text,
        price,
        rooms,
        availble,
        sub_title
      } = element
      if (price > 0 && !availble) {
        debugger
        const myURI = types.filter(v => v.type === aptype)[0].file
        result.push({
          price: price,
          st0: this.morgageSummaryWithMyMoney(price),
          st1: this.morgageSummary(price, 0.25),
          st2: this.morgageSummary(price, 0.3),
          floor: floor,
          discription: free_text,
          rooms: rooms,
          number: `${sub_title} - [${aptype}]**${myURI}`,
          building: building,
          yard: yard
        })
      }
    })
    return result
  }
  render () {
    const data = this.state.data
    if (data.length < 1) return <div />
    let result = []
    data.forEach(e => {
      const { building, region_name } = e
      building.forEach(b => {
        const { apartments, b_title } = b
        const formated = this.prapareData(apartments, region_name, b_title)
        formated.forEach(r => {
          result.push(r)
        })
      })
    })

    console.log(data)
    return (
      <div>
        <div className='main-container'>
          <MorgageData changeData={this.changeProp} />
          <FilterTable data={result} />
        </div>
        <img src={migrash} alt='Logo' height='600px' width='1200px' />;
      </div>
    )
  }
}
