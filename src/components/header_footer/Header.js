import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  // componentWillUnmount(){
  //     window.removeEventListener('scroll',(e) =>{
  //         console.log("removed scroll event from window")
  //     })
  // }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };
  toggleDrawer = value => {
    this.setState({ drawerOpen: value });
  };

  render() {
    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
          padding: '10px 0px',
          boxShadow: 'none'
        }}>
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'> The Venue</div>
            <div className='header_logo_title'>Musical Events</div>
          </div>
          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={() => this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
