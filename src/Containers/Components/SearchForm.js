import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import Fab from '@material-ui/core/Fab'
import {withStyles} from '@material-ui/core'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '50%'
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fab: {
    margin: theme.spacing.unit
  }
})

class SearchForm extends Component{
  render() {
    const { classes } = this.props
    return (
      <Grid container>
       <Grid item xs={10}>
        <TextField
          required
          id="standard-required"
          label="File name"
          className={classes.textField}
          margin="normal"
        />
        </Grid>
        <Grid item xs={2} className="right">
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    )
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchForm)