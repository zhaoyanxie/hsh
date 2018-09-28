import React, { Component } from "react";
import { getLocalStorageLoggedInStatus } from "../utils/userManager";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isAdminLoggedIn: getLocalStorageLoggedInStatus()
    };
  }
  render() {
    const { isAdminLoggedIn } = this.state;
    return (
      <div>{isAdminLoggedIn ? <div>from Admin</div> : <div>rejected</div>}</div>
    );
  }
}
