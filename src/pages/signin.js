import React, { Component } from "react";
import CredentialsForm from "../components/Body/CredentialsForm";
import { API_URL } from "../utils/configVar";
import { saveLoginStatus } from "../utils/userManager";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "Sign In",
      signUpError: {
        hidden: true,
        header: "",
        content: ""
      },
      signInError: {
        hidden: true,
        header: "",
        content: ""
      },
      username: "",
      password: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    const response = await fetch(`${API_URL}account/${event.target.id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });

    const data = await response.json();

    if (response.ok) {
      saveLoginStatus();
      this.props.history.push({
        pathname: `/admin`
      });
    } else {
      if (this.state.componentToDisplay === "Sign Up") {
        this.setState({
          signUpError: {
            hidden: false,
            header: "Error",
            content: data.errors.message
          }
        });
      } else {
        this.setState({
          signInError: {
            hidden: false,
            header: "Error",
            content: data.message
          }
        });
      }
    }
  };

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };

  render() {
    return (
      <CredentialsForm
        loadComponent={this.loadComponent}
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
        state={this.state}
      />
    );
  }
}
