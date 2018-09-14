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
import {
  HOMEPAGE,
  OUR_PRODUCTS,
  OUR_PRODUCTS_ADD,
  OUR_STORES,
  CONTACT,
  RFQ
} from "../pages/endpoints";

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
    console.log(process.env.REACT_APP_HSH_API);
    console.log("here");
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
              path={CONTACT}
              component={props => (
                <ContactUs {...props} updateLocation={this.updateLocation} />
              )}
            />
            <Route
              path={RFQ}
              component={props => (
                <Rfq {...props} updateLocation={this.updateLocation} />
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
