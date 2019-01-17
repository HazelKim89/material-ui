import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid, Card, CardActionArea, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import TempImage from '../TestCompos/images/hams.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  cards: {
    padding: '30px',
    width: '300px',
    height: '300px'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  }
});
class Inside extends React.Component {
  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={40}>
            {["Check the stock", "Search", "Order"].map((text,index) => (
              <Grid key={index} item>
                <Card className={classes.cards}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={TempImage}
                      title="Contemplative Reptile"
                      className={classes.media}
                    />
                  </CardActionArea>
                  <CardContent>
                    {text}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Inside.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inside);