import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from '../utils/GoogleApi'

export class MapContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      places:[],
      pagination: null
    }
  }

  onReady(mapProps, map){
    const {google} = this.props;
    const opts = {
      location: {lat:32.8132922, lng:-96.7521698},
      radius: '1000',
      type: ['food']
    }
    searchNearby(google, map, opts)
    .then((results, pagination) => {
      this.setState({
        places: results,
        pagination
      })
    })
    .catch((status, result) => {

    })
  }
  render() {
    return (
      <div>
        <Map
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          visible={false}
        >
          {this.state.places.map(place => {
            return (
              <div key={place.id}>
                {place.name}
              </div>
            )
          })}
          {/*
            <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
            <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          */}

        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYV2FOC1UKAKyjIAibNXtcKLVb9Wo1VWU'
})(MapContainer)
