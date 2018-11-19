import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListPlaces from './ListPlaces.js'

export class Sidebar extends Component {
  onClick(place, map, google){
    if (this.props.onListItemClick){
      place.place=place;
      this.props.onListItemClick(place,map,google)
    }
  }

  render(){
    return(
      <div className="sidebar" aria-label="restaurant navigation">
        <div className="sidebar-title">
          <h2 tabIndex="0">{this.props.title}</h2>
        </div>
        <ListPlaces
          places={this.props.places}
          onClick={this.onClick.bind(this)}
        />
      </div>
    )
  }
}

export default Sidebar
