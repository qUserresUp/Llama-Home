import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panel: {
    width: '100%',
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    // position: 'relative',
    // left: '10%',
    alignItems: 'center',
  },


}));

const ExpansionPanels = props => {
  const classes = useStyles();


  return (
      <ExpansionPanel className={classes.panel} defaultExpanded={props.defaultExpanded}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
              {props.summary}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.detail} >
          {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

export default ExpansionPanels;
