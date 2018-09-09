import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import Header from "../components/Header";
import SimpleSlider from "../components/Body/Slider";
import Footer from "../components/Footer";

class App extends PureComponent {
  render() {
    return (
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
        <SimpleSlider />
        <Footer />
      </div>
    );
  }
}

export default App;
