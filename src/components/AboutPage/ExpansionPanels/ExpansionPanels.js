import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import ContentOne from '../Content/ContentOne';
import ContentTwo from '../Content/ContentTwo';
import ContentThree from '../Content/ContentThree';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    width: '60%',
    position: 'relative',
    top:'80px',
    left: '20%',
  },

}));

const ExpansionPanels = props => {
  const classes = useStyles();

  let mediaQ = useMediaQuery('(min-width:600px)');
  const mediaStyle = mediaQ ? null : {width: '95%', left: '2.5%'}

  return (
    <div className={classes.root} style={mediaStyle}>
      <ExpansionPanel defaultExpanded
        summary='Why do I want to be a front-end engineer?'
      >
        <ContentOne />
      </ExpansionPanel>

      <ExpansionPanel defaultExpanded
        summary='How did I build my website?'
      >
        <ContentTwo />
      </ExpansionPanel>

      <ExpansionPanel defaultExpanded
        summary='Bibliography'
      >
        <ContentThree />
      </ExpansionPanel>
    </div>
  );
}

export default ExpansionPanels;
