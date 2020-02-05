import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HomeCard from '../HomeCard/HomeCard';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import ContentOne from '../Content/ContentOne';
import ContentTwo from '../Content/ContentTwo';
import ContentThree from '../Content/ContentThree';
import ContentIntro from '../Content/ContentIntro'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import llamaFB from '../../../assets/llamaFullbody.jpg';
import llamaBack from '../../../assets/llamaBack.jpg';
import llamaCrown from '../../../assets/llamaCrown.jpg';

const useStyles = makeStyles(theme => ({
    
    rootContainer: {
        position: 'relative',
        width: '100%',
    },
    paper: {
        width: '95%',
        background: '#333',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        left: '2.5%',
        marginTop: '30px',
        borderRadius: '0.5cm',
        flexDirection: 'column',
    },
    // TODO: floats over content when height decreases
    progressBar: {
        width: '70%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    contentClass: {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems:'center', 
        color: '#FF8E53'
    }
  }));

const Grids = props => {

    const classes = useStyles();
    let mediaQ = useMediaQuery('(min-width:600px)');
    let mediaStyle = mediaQ ? null : {marginTop: '100px'};

    return (
    <div className={classes.rootContainer} style={mediaStyle}>

        <Paper 
            className={classes.paper} 
            style={{
                borderRadius: '20cm', 
                width: mediaQ ? '70%' : '100%', 
                left: mediaQ ? '15%': '0',
            }}
        >
            <HomeCard contentClass={classes.contentClass} disableImg>
                <ContentIntro />
            </HomeCard>
        </Paper>

        <Paper className={classes.paper}>
        
            <HomeCard img={llamaFB}>
                <ContentOne/>
            </HomeCard>

            <LinearProgress className={classes.progressBar} color='secondary'/>

            <HomeCard img={llamaBack}>
                <ContentTwo/>
            </HomeCard>

            <LinearProgress className={classes.progressBar} color='secondary'/>

            <HomeCard img={llamaCrown}>
                <ContentThree/>
            </HomeCard>

        </Paper>

    </div>
    

    )
}

export default Grids;