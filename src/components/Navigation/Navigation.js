import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    paperContainer: {
      flexGrow: 1,
      position: 'fixed',
      zIndex: 200,
      width: '100vw',
      height: '50px',
    },
});

const Navigation = props => {
    const classes = useStyles();

    const changePageHandler = (event, newPage) => {
        props.onChange(newPage);
    }

    return (
        <div>
            <Paper className={classes.paperContainer}>
                <Tabs
                    value={props.page}
                    onChange={changePageHandler}
                    indicatorColor="primary"
                    textColor="black"
                    centered
                >
                    <Tab label="Home" />
                    <Tab label="Fun Facts" />
                    <Tab label="About" />
                </Tabs>
            </Paper>
        </div>
    )
}

export default Navigation;