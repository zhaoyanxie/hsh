import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/homepage";
import OurStory from "../pages/ourstory";
import OurStores from "../pages/ourstores";

const ENDPOINT = {
  homepage: "/",
  ourStores: "/our_stores"
};

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
            <Route path="/hsh" exact component={HomePage} />
            <Route path="/hsh/our_story" exact component={OurStory} />
            <Route path="/hsh/our_stores" exact component={OurStores} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
