import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Icon } from "semantic-ui-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoWindowVisible: false,
      activeMarker: {} // Marker that is being clicked
    };
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      activeMarker: marker,
      isInfoWindowVisible: true
    });
  };

  render() {
    const { google, mapCenter, zoom, onMapLoaded } = this.props;
    return (
      <div className="map" style={{ height: "70vh", width: "100%" }}>
        <Map
          google={google}
          zoom={zoom}
          center={{ lat: mapCenter.lat, lng: mapCenter.lng }}
          onReady={onMapLoaded}
          style={{ width: "50%", height: "60vh" }}
        >
          <Marker
            position={{
              lat: 1.35,
              lng: 103.82
            }}
            onClick={this.onMarkerClick}
            name={
              "hsh main store location, Address: fake address, blah blah road, S(123456)"
            }
            icon={{
              url:
                "https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-07-512.png",
              origin: new google.maps.Point(0, 0),
              scaledSize: new google.maps.Size(60, 64)
            }}
          />
          <InfoWindow
            onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.isInfoWindowVisible}
            maxWidth={200}
          >
            <div>
              <span>{this.state.activeMarker.name}</span>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  v: "3.30"
})(MapContainer);
