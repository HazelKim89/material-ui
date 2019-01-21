import Base from '../Main/Base.js'
import React, { Component } from 'react'
import MainIcons from '../Main/Inside.js'

class Home extends Component {
  render() {
    const home = <MainIcons />
    return (
      <div>
        <Base insideMain={home} />
      </div>
    )
  }
}

export default Home