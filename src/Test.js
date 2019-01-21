import React from 'react'
import Hams from './TestCompos/images/hams.jpg'

class Test extends React.Component{
  render(){
    return(
      <div>
        <h1>This is second page</h1>
        <div>
          <img src={Hams} width="300px"></img>
        </div>
      </div>
    )
  }
}

export default Test