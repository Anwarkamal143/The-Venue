import React from 'react';

// import { Send } from '@material-ui/icons';
import {
  Drawer,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
const SideDrawer = props => {
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}>
      <List
        component='nav'
        aria-labelledby='list'
        subheader={
          <ListSubheader component='div' id='list'>
            Welcome
          </ListSubheader>
        }>
        <ListItem button onClick={() => console.log('Featured')}>
          {/* <ListItemIcon>
            <Send />
          </ListItemIcon> */}
          <ListItemText>Events starts in</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log('Venue NFO')}>
          {/* <ListItemIcon>
            <Send />
          </ListItemIcon> */}
          <ListItemText>Venue NFO</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log('Heighlights')}>
          {/* <ListItemIcon>
            <Send />
          </ListItemIcon> */}
          <ListItemText>Heighlights</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log('Pricing')}>
          {/* <ListItemIcon>
            <Send />
          </ListItemIcon> */}
          <ListItemText>Pricing</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log('Location')}>
          {/* <ListItemIcon>
            <Send />
          </ListItemIcon> */}
          <ListItemText>Location</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
