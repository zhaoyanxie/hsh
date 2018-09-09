import React, { Component } from "react";
import { Container, Icon, List, Menu, Portal } from "semantic-ui-react";
import Logo from "./Logo";

export default class MobileMenu extends Component {
  state = {
    visible: false,
    activeItem: "store"
  };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleClose = () => this.setState({ visible: false });

  render() {
    const { visible, activeItem } = this.state;
    return (
      <Menu borderless pointing>
        <Container text>
          <Menu.Item header name="store" active={activeItem === "store"}>
            <Logo /> Kitchen+Ware
          </Menu.Item>

          <Menu.Menu borderless position="right">
            <Menu.Item name="burgerButton" onClick={this.handleButtonClick}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu.Menu>

          <Portal closeOnEscape onClose={this.handleClose} open={visible}>
            <List divided link size="massive" align="center">
              <List.Item>
                <List.Icon name="group" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">Our Story</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="map marker alternate"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">Our Stores</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">Contact Us</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Portal>
        </Container>
      </Menu>
    );
  }
}
