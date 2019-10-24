import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const TopLevelCard = (props: TopLevelCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardHeader
        title={props.title}
      />
    </Card>
  );
}

interface TopLevelCardProps {
  title: string,
  image: string
}

export default TopLevelCard;