import React from "react";
import { Button, Divider } from "semantic-ui-react";

const SignInButton = props => {
  return (
    <div>
      <Button
        fluid
        id="signin"
        color="blue"
        type="submit"
        onClick={props.handleOnSubmit}
      >
        Sign In
      </Button>
      <Divider />
      <div>
        <p className="text-align-center">
          Don't have an account?
          <a
            className="cursor-pointer"
            onClick={() => props.loadComponent("Sign Up")}
          >
            {` `} Sign Up Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInButton;
