import React, { Component } from 'react'
import Base from '../Main/Base.js'

class Test extends Component {
  render(){
    const first = <h1>Check the stock</h1>
    return(
      <div>
        <Base insideMain={first} />
      </div>
    )
  }
}

export default Test