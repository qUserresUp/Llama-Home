import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({
    
    card: {
        display: 'flex',
        background: '#424242',
        width: '70%',
        margin: '20px',
        position: 'relative',
    },
    content: {
        flex: '1 0 auto',
        maxWidth: '75%',
        color: '#FE6B8B',
      },
    cover: {
        flex: '1',
        height: '200px',
    },
  }));

  const HomeCards = props => {
    const classes = useStyles();
    let mediaQ = useMediaQuery('(min-width:600px)');

    let mediaStyle = mediaQ ? null : {flexDirection: 'column',width: '90%',};

    let cardMedia = (
        <CardMedia 
                className={classes.cover}
                image={props.img}
                title="img"
            />
    );
    let contentClass = classes.content;

    if(props.disableImg){
        cardMedia = null;
    }
    if(props.contentClass){
        contentClass = props.contentClass;
    }

    return (
        <Card className={classes.card} style={mediaStyle}>
            {cardMedia}
            <CardContent className={contentClass}>
                    {props.children}
            </CardContent>
        </Card>
    )
  }

  export default HomeCards;