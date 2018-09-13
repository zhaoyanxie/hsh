import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class ContactUs extends Component {
  // Todo: change to HOC
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updateLocation(pathname);
  }
  render() {
    return <Container text>From contact us</Container>;
  }
}
