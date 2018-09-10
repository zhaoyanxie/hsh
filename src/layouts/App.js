import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/homepage";
import OurStory from "../pages/ourstory";

class App extends PureComponent {
  render() {
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
          <Route path="/" exact component={HomePage} />
          <Route path="/our_story" exact component={OurStory} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
