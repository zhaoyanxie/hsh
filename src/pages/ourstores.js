import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import GoogleApiWrapper from "../components/Body/MapContainer/MapContainer";

export default class OurStores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 1.35,
        lng: 103.82
      },
      zoom: 11,
      google: undefined,
      googleMap: undefined
    };
  }

  // Called when Google Maps API scripts are loaded and map is ready
  onMapLoaded = (mapProps, map) => {
    this.setState({
      google: window.google,
      googleMap: map
    });
  };

  render() {
    const { center, zoom } = this.state;
    return (
      <Container text>
        <GoogleApiWrapper
          mapCenter={center}
          zoom={zoom}
          onMapLoaded={this.onMapLoaded}
        />
      </Container>
    );
  }
}
