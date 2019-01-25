import React, { Component } from 'react'

class FileInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: 'FileName',
      size: '0Kb'
    }
  }
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    const { id, name, size } = this.props.info

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{size}</div>
      </div>
    )
  }
}


export default FileInfo