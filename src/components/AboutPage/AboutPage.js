import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanels from './ExpansionPanels/ExpansionPanels';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    AboutPageStyle: {
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        paddingBottom: '10%',
    },

}));



const AboutPage = props => {
    const classes = useStyles();
    let mediaQ = useMediaQuery('(min-width:600px)');
    const mediaStyle = mediaQ ? null : {paddingBottom: '30%'}

    return (
        <div className={classes.AboutPageStyle} style={mediaStyle}>
            <ExpansionPanels />
        </div>
    )
} 

export default AboutPage;
