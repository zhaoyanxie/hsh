import React, { Component } from "react";
import { Container, Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { OUR_PRODUCTS_ADD, RFQ_ALL } from "../pages/endpoints";
import { fetchAdminStatus } from "../utils/fetchAdminStatus";
import Unauthorised from "./unauthorised";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isAdminLoggedIn: false
    };
  }

  async componentDidMount() {
    (await fetchAdminStatus())
      ? this.setState({ isAdminLoggedIn: true })
      : this.setState({ isAdminLoggedIn: false });
  }

  render() {
    const { isAdminLoggedIn } = this.state;
    return (
      <div>
        {isAdminLoggedIn ? (
          <Container text>
            <List>
              <Header>PRODUCTS</Header>
              <List.Item as={Link} to={OUR_PRODUCTS_ADD}>
                Add Products
              </List.Item>
              <Header>RFQs</Header>
              <List.Item as={Link} to={RFQ_ALL}>
                View All RFQ
              </List.Item>
            </List>
          </Container>
        ) : (
          <Unauthorised />
        )}
      </div>
    );
  }
}
