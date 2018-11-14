import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Place from './Place.js'

export class ListPlaces extends Component {
  render() {
    return (
      <div className="list-places-content">
        {this.props.places.map(place => {
          return (
            <Place
              place={place}
              onClick={this.props.onClick}
              key={place.id}
            />
          )
        })}
      </div>
    )
  }
}


export default ListPlaces
