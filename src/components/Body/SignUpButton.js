import React from "react";
import { Button, Divider } from "semantic-ui-react";

const SignUpButton = props => {
  return (
    <div>
      <Button
        fluid
        id="signup"
        color="blue"
        type="submit"
        onClick={props.handleOnSubmit}
      >
        Submit
      </Button>
      <Divider />
      <div>
        <p className="text-align-center">
          Have an account?
          <a
            className="cursor-pointer"
            onClick={() => props.loadComponent("Sign In")}
          >
            {` `} Sign In Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpButton;
