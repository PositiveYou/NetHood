import React, { Component } from 'react';

class Site extends Component {
  render() {
    return (
      <div className='app-container' style={{border: '1px solid black'}}>
        {this.props.children}
      </div>
    );
  }
}

export default Site;