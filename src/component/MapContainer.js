import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from '../utils/GoogleApi'
import Sidebar from './Sidebar.js'

export class MapContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      places:[],
      pagination: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onReady(mapProps, map){
    const {google} = this.props;
    const opts = {
      location: {lat:32.8124432, lng:-96.7514695},
      radius: '500',
      type: ['restaurant']
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

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: this.props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    console.log(this.props.selectedPlace)
  }

  onClose = props => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  renderMarkers() {
    if(!this.state.places){ return null; }
    return this.state.places.map(place =>{
      return <Marker
        key={place.id}
        onClick={this.onMarkerClick}
        name={place.name}
        //place={place}
        position={place.geometry.location}
             >

        <InfoWindow
          key= {place.id}
          marker = {this.state.activeMarker}
          visible = {this.state.showingInfoWindow}
          onClose = {this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Marker>
    })
  }

  render() {
    return (
      <div>
        <Sidebar
          title={'Restaurants'}
          //onListItemClick={this.onMarkerClick.bind(this)}
          places={this.state.places}
        />

        <div className="map">
          <Map
            style={{height:'100%', width:'75vw', position: 'absolute'}}
            onReady={this.onReady.bind(this)}
            google={this.props.google}
            initialCenter={{
              lat: 32.8124432,
              lng: -96.7514695
            }}
            zoom={16}
          >

            {this.renderMarkers()}
          </Map>
        </div>

        {/*

            <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            <h1>{this.state.selectedPlace.name}</h1>
            </div>
            </InfoWindow>
        */}


</div>

);
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYV2FOC1UKAKyjIAibNXtcKLVb9Wo1VWU'
})(MapContainer)
