import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Sidebar extends Component {
  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-title">
          <h2>{this.props.title}</h2>
        </div>
      </div>
    )
  }
}

export default Sidebar
