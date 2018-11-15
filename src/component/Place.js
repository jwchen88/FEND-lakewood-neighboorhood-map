import React, { Component } from 'react';

export class Place extends Component {
  render(){
    const{place}=this.props;
    return (
      <div className="place">
        <h3 tabIndex="0">{place.name}</h3>
      </div>
    )
  }
}

export default Place
