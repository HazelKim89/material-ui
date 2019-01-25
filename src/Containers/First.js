import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles } from '@material-ui/core'
import SearchForm from './Components/SearchForm.js'
import FileList from './Components/FileList.js'

class First extends Component {
  id = 3
  state = {
    information: [
      {
        id: 0,
        name: 'Guide.txt',
        size: '530Kb'
      },
      {
        id: 1,
        name: 'Rules.txt',
        size: '2.3Mb'
      },
      {
        id: 2,
        name: 'Map.pptx',
        size: '5.1Mb'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    })
  }
  
  render() {
    return (
      <div>
        <Grid container>
          <SearchForm onCreate={this.handleCreate} /> 
          <Grid item xs={12}>
           <FileList data={this.state.information} />
          </Grid>
        </Grid>
      </div>
    )
  }
}


export default First