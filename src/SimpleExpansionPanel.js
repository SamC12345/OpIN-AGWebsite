import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Iframe from 'react-iframe'


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Part I</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography>
          Click <a href="https://docs.google.com/document/d/1SWJBw0dEe5E14FdffI-gqoWpoUL-lcqcfTJq8hSPvz8/edit?usp=sharing">here</a> to go to semester 1 curriculum.
          </Typography> */}
          {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vTUHt_wh_cO2Md8CDUZGo_nL5smwZDaqI0wQ38R666LyOEtT2UlBgH6ka6HPn2k7uZ7KYcL3ufUxKrb/pub?embedded=true"></iframe> */}
          <Iframe url="https://docs.google.com/document/d/e/2PACX-1vTUHt_wh_cO2Md8CDUZGo_nL5smwZDaqI0wQ38R666LyOEtT2UlBgH6ka6HPn2k7uZ7KYcL3ufUxKrb/pub?embedded=true"
        width="100%"
        height="50vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
        styles={{border:"aliceblue"}}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Part II</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Link to semester 2 curriculum will go here.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);