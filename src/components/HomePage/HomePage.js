import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from './Grids/Grids';
import ContentCards from './ContentCards/ContentCards';

const useStyles = makeStyles(theme => ({
    homePageStyle: {
        width: '100vw',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: '8px',
        paddingBottom: '10%',
    }
  }));

const HomePage = props => {
    const classes = useStyles();
    
    return (
        <div className={classes.homePageStyle}>
            <Grid />
            <ContentCards />
        </div>
    )
}

export default HomePage;

