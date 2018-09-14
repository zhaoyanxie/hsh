import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";
import Logo from "./Logo";
import {
  HOMEPAGE,
  OUR_PRODUCTS,
  OUR_STORES,
  CONTACT
} from "../../pages/endpoints";

export default class DesktopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentWillReceiveProps(nextProps) {
    const nextLocation = nextProps.currentLocation;
    const currentLocation = this.props.currentLocation;
    if (nextLocation !== currentLocation) {
      this.setState({
        activeItem: nextLocation
      });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu borderless pointing>
        <Container text>
          <Menu.Item
            header
            as={Link}
            to={HOMEPAGE}
            name={HOMEPAGE}
            active={activeItem === HOMEPAGE}
            onClick={this.handleItemClick}
          >
            <Logo />
            HSH Kitchenware
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to={OUR_PRODUCTS}
              name={OUR_PRODUCTS}
              active={activeItem === OUR_PRODUCTS}
              onClick={this.handleItemClick}
            >
              <Icon name="group" />
              Our Products
            </Menu.Item>

            <Menu.Item
              as={Link}
              to={OUR_STORES}
              name={OUR_STORES}
              active={activeItem === OUR_STORES}
              onClick={this.handleItemClick}
            >
              <Icon name="map marker alternate" />
              Our Stores
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={CONTACT}
              name={CONTACT}
              active={activeItem === CONTACT}
              onClick={this.handleItemClick}
            >
              <Icon name="mail" /> Contact Us
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
