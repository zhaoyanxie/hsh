import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, List } from "semantic-ui-react";

import { API_URL } from "../utils/configVar";
import { RFQ_ALL } from "../pages/endpoints";
import RfqForm from "../components/Body/RfqForm";

export default class RfqAll extends Component {
  constructor() {
    super();
    this.state = {
      allRfq: [],
      rfq: []
    };
  }

  getAllRfq = async () => {
    const response = await fetch(`${API_URL}rfq/all`, {
      method: "GET"
    });

    if (response.ok) {
      const data = await response.json();
      this.setState({
        allRfq: data
      });
    }
  };

  componentDidMount() {
    const currentLocation = this.props.location.pathname;
    const regExpLocation = /\/rfq\/all\/?$/i;

    if (currentLocation.match(regExpLocation)) {
      this.getAllRfq();
    }
  }

  render() {
    const regExpLocation = /\/rfq\/all\/?$/i; // to match /rfq/all
    const allRfq = this.state.allRfq.map(rfq => (
      <List.Item as={Link} key={rfq._id} to={`${RFQ_ALL}/${rfq.rfqNo}`}>
        {rfq.rfqNo}
      </List.Item>
    ));

    return (
      <div>
        {this.props.location.pathname.match(regExpLocation) ? (
          <Container text>
            <List>{allRfq}</List>
          </Container>
        ) : (
          <RfqForm {...this.props.location} />
        )}
      </div>
    );
  }
}
