import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import Stocks from '../TestCompos/images/Stocks.png'
import Search from '../TestCompos/images/search.png'
import Order from '../TestCompos/images/order.png'
import { Link } from 'react-router-dom'

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
    objectFit: 'contain',
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
    const imgs = [Stocks, Search, Order]
    return (
      <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={40}>
            {["Check the stock", "Search", "Order"].map((text, index) => (
              <Grid key={index} item>
                <Card className={classes.cards}>
                  <Link to={"/"+index}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={imgs[index]}
                        title="Contemplative Reptile"
                        className={classes.media}
                      />
                    </CardActionArea>
                  </Link>
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