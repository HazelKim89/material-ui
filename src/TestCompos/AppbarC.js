import React from 'react'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'


class AppbarC extends React.Component {
  render(){
    return (
      <AppBar position='fixed' className={classNames(classes.appBar,{})}>
      </AppBar>  
    )
  }
}