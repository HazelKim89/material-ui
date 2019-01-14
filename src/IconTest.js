import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class Icons extends React.Component {
  render() {
    const {classes} = props
    return (
      <div className={classes.root}>
        <Icon className={classes.icon} add_circle></Icon>
        <Icon className={classes.icon} color="primary">add_circle</Icon>
      </div>
    )
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Icons)