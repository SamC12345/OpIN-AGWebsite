import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
              <div id="NavLinkButtonContainer1"><NavLink exact to="/" id="NavLinkButton">Home</NavLink></div>
          </ListItem>
        <Divider />
        <ListItem >
          <div id="NavLinkButtonContainer1"><NavLink to="/curriculum" id="NavLinkButton">Curriculum</NavLink></div>
        </ListItem>
        <Divider />
        <ListItem >
          <div id="NavLinkButtonContainer1"><NavLink to="/about" id="NavLinkButton">About</NavLink></div>
        </ListItem>
        <Divider />
        <ListItem >
          <div id="NavLinkButtonContainer1"><NavLink to="/sources" id="NavLinkButton">Sources</NavLink></div>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton></Button>
        
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);