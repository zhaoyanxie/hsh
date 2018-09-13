import React, { PureComponent } from "react";
import SimpleSlider from "../components/Body/Slider";

class HomePage extends PureComponent {
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updateLocation(pathname);
  }
  render() {
    return (
      <div>
        <SimpleSlider />
      </div>
    );
  }
}

export default HomePage;
