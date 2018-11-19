import React, { Component } from 'react';

export class Place extends Component {
  onClick(e){
    this.props.onClick(this.props.place)
  }

  render(){
    const{place}=this.props;
    return (
      <div className="place"
        aria-label="place.name"
        onClick={this.onClick.bind(this)}
      >

        <h3 tabIndex="0">{place.name}</h3>
      </div>
    )
  }
}

export default Place
