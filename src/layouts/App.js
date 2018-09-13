import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/homepage";
import OurProducts from "../pages/ourproducts";
import OurStores from "../pages/ourstores";
import {
  HOMEPAGE,
  OUR_PRODUCTS,
  OUR_STORES,
  CONTACT
} from "../pages/endpoints";
import ContactUs from "../pages/contactus";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentLocation: ""
    };
  }

  updateLocation = loc => {
    this.setState({
      currentLocation: loc
    });
  };

  render() {
    const { currentLocation } = this.state;
    return (
      <BrowserRouter>
        <div>
          <header>
            <Headroom
              upTolerance={10}
              downTolerance={10}
              style={{ zIndex: "20", height: "6.5em" }}
            >
              <Header currentLocation={currentLocation} />
            </Headroom>
          </header>
          <Switch>
            <Route
              path={OUR_PRODUCTS}
              component={props => (
                <OurProducts {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={OUR_STORES}
              component={props => (
                <OurStores {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              exact
              path={HOMEPAGE}
              component={props => (
                <HomePage {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              exact
              path={CONTACT}
              component={props => (
                <ContactUs {...props} updateLocation={this.updateLocation} />
              )}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
