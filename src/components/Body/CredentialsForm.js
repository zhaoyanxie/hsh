import React from "react";
import { Container, Form, Message } from "semantic-ui-react";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";

const CredentialsForm = props => {
  const isSignUp = props.state.componentToDisplay === "Sign Up";
  const isMessageHidden = isSignUp
    ? props.state.signUpError.hidden
    : props.state.signInError.hidden;
  const errorHeader = isSignUp
    ? props.state.signUpError.header
    : props.state.signInError.header;
  const errorContent = isSignUp
    ? props.state.signUpError.content
    : props.state.signInError.content;

  return (
    <Container text>
      <h1>{props.state.componentToDisplay}</h1>
      <Form>
        <Message
          negative
          hidden={isMessageHidden}
          header={errorHeader}
          content={errorContent}
        />
        <Form.Field>
          <label>Username</label>
          <input
            id="username"
            placeholder="Username"
            value={props.state.username}
            onChange={props.handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={props.state.password}
            onChange={props.handleOnChange}
          />
        </Form.Field>
        {props.state.componentToDisplay === "Sign Up" && (
          <SignUpButton
            handleOnSubmit={props.handleOnSubmit}
            loadComponent={props.loadComponent}
          />
        )}

        {props.state.componentToDisplay === "Sign In" && (
          <SignInButton
            handleOnSubmit={props.handleOnSubmit}
            loadComponent={props.loadComponent}
          />
        )}
      </Form>
    </Container>
  );
};

export default CredentialsForm;
