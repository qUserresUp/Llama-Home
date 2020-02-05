import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FunFactsCard from './FunFactsCards/FunFactsCards';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    FunFactsPageStyle: {
        width: '100vw',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        paddingBottom: '10%',
    },
}));

const FunFactsPage = props => {
    const classes = useStyles();
    let mediaQ = useMediaQuery('(min-width:600px)');
    const mediaStyle = mediaQ ? null : {paddingBottom: '30%'}


    return (
        <div className={classes.FunFactsPageStyle} style={mediaStyle}>
            <FunFactsCard    
                style={{top:'100px'}}
            />
            </div>
    )
}

export default FunFactsPage;