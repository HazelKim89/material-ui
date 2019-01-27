import React, { Component } from 'react'
import Base from '../Main/Base.js'
import FirstCompo from '../Containers/First.js'

class First extends Component {
  render(){
    const first = <FirstCompo />
    return(
      <div>
        <Base insideMain={first} />
      </div>
    )
  }
}

export default First 