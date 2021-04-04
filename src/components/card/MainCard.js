import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import logo from '../../style/picture/samfransisco.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    top: 30

  },
  media: {
    height: 300,
  },
});

const MainCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={logo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              OverView
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This is sample app using React/Redux and Material UI
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Sign Up
          </Button>
          <Button size="small" color="primary">
            Sign In
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default MainCard