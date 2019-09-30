import React, { Component ,useState } from 'react'

export default class MorgageData extends Component {


   constructor(props){
       super(props)
       this.state={
           years:25,
           rate:0.0416
       }
   }
   handleChange = value => this.setState(value)

    render() {
        const {changeData} =this.props
        const {years,rate}=this.state
        return (
            <div>
                rate:<input value={rate} onChange ={(event)=>this.handleChange({rate:event.target.value})}/>
                years:<input value={years} onChange ={(event)=>this.handleChange({years:event.target.value})}/>
                <button type="button" onClick={()=>changeData({years:years,rate:rate})}>Click Me!</button>
            </div>
        )
    }
}
