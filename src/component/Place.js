import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Place extends Component {
  render(){
    const{place}=this.props;
    return (
      <div className="place">
        <h3>{place.name}</h3>
      </div>
    )
  }
}

export default Place
