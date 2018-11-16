import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListPlaces from './ListPlaces.js'

export class Sidebar extends Component {

  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-title">
          <h2 tabIndex="0">{this.props.title}</h2>
        </div>
        <ListPlaces
          places={this.props.places}
          //onClick={this.onClick.bind(this)}
        />
      </div>
    )
  }
}

export default Sidebar
