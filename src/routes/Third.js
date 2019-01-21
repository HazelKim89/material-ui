import React, { Component } from 'react'
import Base from '../Main/Base.js'

class Test extends Component {
  render(){
    const third = <h1>Order</h1>
    return(
      <div>
        <Base insideMain={third} />
      </div>
    )
  }
}

export default Test