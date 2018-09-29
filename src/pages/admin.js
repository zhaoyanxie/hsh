import React, { Component } from "react";
import { API_URL } from "../utils/configVar";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isAdminLoggedIn: false
    };
  }

  fetchAdminRoute = async () => {
    const response = await fetch(`${API_URL}admin`, {
      method: "GET",
      credentials: "include"
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({
        isAdminLoggedIn: true
      });
    } else {
      console.log("response", response.status);
      this.setState({ isAdminLoggedIn: false });
    }
  };

  async componentDidMount() {
    this.fetchAdminRoute();
  }

  render() {
    const { isAdminLoggedIn } = this.state;
    return (
      <div>{isAdminLoggedIn ? <div>from Admin</div> : <div>rejected</div>}</div>
    );
  }
}
