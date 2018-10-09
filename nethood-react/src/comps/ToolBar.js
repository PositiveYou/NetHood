import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    const user_store = this.props.user;
    return (
      <div className="tool-bar">
        <h1>NetHood</h1>
        <div>
            <p>{user_store.getState()}</p>
        </div>
      </div>
    );
  }
}

export default ToolBar;