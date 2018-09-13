import React, { PureComponent, Fragment } from "react";
import { Responsive } from "semantic-ui-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <MobileMenu />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <DesktopMenu {...this.props} />
        </Responsive>
      </Fragment>
    );
  }
}

export default Header;
