import React, {Component} from 'react'
import FileInfo from './FileInfo.js'

class FileList extends Component {
  static defaultProps = {
    data: []
  }

  render(){
    const {data} = this.props
    const list = data.map(
      info => (<FileInfo key={info.id} info={info} /> )
    )

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default FileList