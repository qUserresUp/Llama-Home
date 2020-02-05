import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import llama1 from '../../../assets/llama1.jpeg';
import llama2 from '../../../assets/llama2.jpg';
import llama3 from '../../../assets/llama3.jpg';


const useStyles = makeStyles(theme => ({

    paperContainer: {
        position: 'relative',
        top: '80px',
        left: '1%',
        marginBottom: '8%',
        height: '75vh',
        width: '98%',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: '0.5cm',
        flexGrow: 1,

    },
    gridContainer: {
        flexGrow: 1,
        height: '100%',
        width: '94%',
        position: 'relative',
        top: '2%',
        left: '6%',
    },
    innerGridContainer: {
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    paperStyle: {
        height: '70vh',
        width: '100%',
        overflow: 'hidden',
    },
    img: {
        height: '100%',
        width: '100%',
    }

  }));

const Grids = props => {

    const classes = useStyles();
    let mediaQ = useMediaQuery('(min-width:600px)');
    let mediaStyle = mediaQ ? 
            {
                paper: null,
                paperStyle:null,
                img: null,
            }
         : {
            paper: {height: '130px'},
            paperStyle:{height: '110px', width: '100px'},
            img: {height: '110px', width: '100px'}
        };


    return (
    <Fragment>
        
        <Paper className={classes.paperContainer} style={mediaStyle.paper} elevation={10}>
        <Grid container className={classes.gridContainer} spacing={2}>
                <Grid container className={classes.innerGridContainer} justify="center" spacing={8}>
                    {[llama3, llama1, llama2].map(value => (
                        <Grid key={value} item xs={4}>
                            <Paper className={classes.paperStyle} style={mediaStyle.paperStyle}>
                                <img className={classes.img} style={mediaStyle.img} src={value} alt="llama"/>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
      </Grid>
      </Paper>

    </Fragment>

    )
}

export default Grids;