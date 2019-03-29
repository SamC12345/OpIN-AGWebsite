import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
          <Typography className={classes.heading}>Food Computer Instructions</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <a href="https://docs.google.com/presentation/d/1-RhLp98lgGOMHJ7TVwpK3idU7WbcJTbuMNNjlbJ5TME/edit?usp=sharing">Part I Assembly: Prepared Parts Documentation</a><br></br>
          <a href="https://docs.google.com/presentation/d/1bXkGeTNTy66-_mO14JqDCGnvB5E5y3JXhQ38yVxRPP0/edit?usp=sharing">Part II Assembly: Brain Subassembly Documentation</a><br></br>
          <a href="https://docs.google.com/presentation/d/1TVVPPh8ymDziJstBPThQpdcQynRyJOo_DGR2CHAkSU0/edit?usp=sharing">Part III Assembly: Enclosure Subassembly Documentation</a><br></br>
          <a href="https://docs.google.com/presentation/d/1h53Dlnwfk4txx3D7bPjipJmu_femCNZAWq2onlkEO0c/edit?usp=sharing">Part IV Assembly: Final Assembly Documentation</a><br></br>
          <a href="https://docs.google.com/presentation/d/1XIZdzpvIR4x0E80TgR2NLbtaRzQr0QnXLJ8R8A7IE9g/edit?usp=sharing">Part V: Operational Guide</a><br></br>
          <a href="https://docs.google.com/presentation/d/1YNNcF4PwlKjqAmt4XgMx4NBQcAw279qRtd0rp2uKJSg/edit?usp=sharing">Part VI: MVP Software Guide</a><br></br>

          </Typography>
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