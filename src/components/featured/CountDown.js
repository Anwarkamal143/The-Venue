import React, { Component } from 'react';

import Slide from 'react-reveal/Slide';

export default class CountDown extends Component {
  state = {
    deadline: 'Dec, 16, 2018',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };

  getCountDown(deadline) {
    var time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
  }
  //   componentDidUpdate() {
  //     // setInterval(() => this.getCountDown(this.state.deadline), 1000);
  //   }
  render() {
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>Events Starts in</div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>23</div>
              <div className='countdown_tag'>Days</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>2</div>
              <div className='countdown_tag'>Hs</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>20</div>
              <div className='countdown_tag'>Min</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>40</div>
              <div className='countdown_tag'>Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
