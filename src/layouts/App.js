import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/homepage";
import OurProducts from "../pages/ourproducts";
import AddProducts from "../pages/addproducts";
import Rfq from "../pages/rfq";
import OurStores from "../pages/ourstores";
import ContactUs from "../pages/contactus";
import { API_URL } from "../utils/configVar";

import {
  HOMEPAGE,
  OUR_PRODUCTS,
  OUR_PRODUCTS_ADD,
  OUR_STORES,
  CONTACT,
  RFQ,
  RFQ_ALL,
  SIGN_IN,
  ADMIN
} from "../pages/endpoints";
import RfqAll from "../pages/rfqall";
import SignIn from "../pages/signin";
import Admin from "../pages/admin";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentLocation: "",
      allProducts: []
    };
  }

  updateLocation = loc => {
    this.setState({
      currentLocation: loc
    });
  };

  getAllProducts = async () => {
    const response = await fetch(`${API_URL}our-products`, {
      method: "GET"
    });

    if (response.ok) {
      const data = await response.json();
      this.setState({
        allProducts: data
      });
    }
  };

  componentDidMount = () => {
    this.getAllProducts();
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
              path={OUR_PRODUCTS_ADD}
              component={props => (
                <AddProducts {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={OUR_PRODUCTS}
              component={props => (
                <OurProducts
                  {...props}
                  updateLocation={this.updateLocation}
                  allProducts={this.state.allProducts}
                  getAllProducts={this.getAllProducts}
                />
              )}
            />
            <Route
              path={OUR_STORES}
              component={props => (
                <OurStores {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={CONTACT}
              component={props => (
                <ContactUs {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={RFQ_ALL}
              component={props => (
                <RfqAll {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={RFQ}
              component={props => (
                <Rfq
                  {...props}
                  updateLocation={this.updateLocation}
                  allProducts={this.state.allProducts}
                />
              )}
            />
            <Route
              path={SIGN_IN}
              component={props => (
                <SignIn {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={ADMIN}
              component={props => (
                <Admin {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              exact
              path={HOMEPAGE}
              component={props => (
                <HomePage {...props} updateLocation={this.updateLocation} />
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
