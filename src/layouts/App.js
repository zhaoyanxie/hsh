import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/homepage";
import OurProducts from "../pages/ourproducts";
import OurStores from "../pages/ourstores";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentLocation: ""
    };
  }

  render() {
    const { currentLocation } = this.state;
    console.log(currentLocation);
    return (
      <BrowserRouter>
        <div>
          <header>
            <Headroom
              upTolerance={10}
              downTolerance={10}
              style={{ zIndex: "20", height: "6.5em" }}
            >
              <Header />
            </Headroom>
          </header>
          <Switch>
            <Route path="/hsh/our_products" component={OurProducts} />
            <Route path="/hsh/our_stores" component={OurStores} />
            <Route exact path="/hsh" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
