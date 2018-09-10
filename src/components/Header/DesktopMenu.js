import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";
import Logo from "./Logo";

export default class DesktopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeItem: this.props.location.pathname
      activeItem: "store"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // componentWillReceiveProps = nextProps => {
  //   const nextPathname = nextProps.location.pathname;
  //   const currentPathname = this.props.location.pathname;

  //   if (nextPathname !== currentPathname) {
  //     this.setState({
  //       activeItem: nextPathname
  //     });
  //   }
  // };

  render() {
    const { activeItem } = this.state;
    // const { token, cartCount } = this.props;
    return (
      <Menu borderless pointing>
        <Container text>
          <Link to="/">
            <Menu.Item
              header
              name="store"
              active={activeItem === "store"}
              onClick={this.handleItemClick}
            >
              <Logo />
              Kitchen+Ware
            </Menu.Item>
          </Link>

          <Menu.Menu position="right">
            <Menu.Item
              name="our_story"
              active={activeItem === "our_story"}
              onClick={this.handleItemClick}
            >
              <Link to="our_story" style={{ color: "black" }}>
                <Icon name="group" />
                Our Story
              </Link>
            </Menu.Item>

            <Menu.Item
              name="stores"
              active={activeItem === "stores"}
              onClick={this.handleItemClick}
            >
              <Icon name="map marker alternate" />
              Our Stores
            </Menu.Item>
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
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
