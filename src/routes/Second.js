import React, { Component } from 'react'
import Base from '../Main/Base.js'

class Test extends Component {
  render(){
    const second = <h1>Search</h1>
    return(
      <div>
        <Base insideMain={second} />
      </div>
    )
  }
}

export default Test