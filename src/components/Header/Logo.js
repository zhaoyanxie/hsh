import React from "react";
import { Image } from "semantic-ui-react";

import logo from "../../images/hsh_logo.png";

const Logo = () => {
  return (
    <Image
      size="mini"
      src={logo}
      style={{ marginRight: "1.5em" }}
      alt="Kichen+Ware"
    />
  );
};

export default Logo;
