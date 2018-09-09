import React from "react";
import { Image } from "semantic-ui-react";

import kitchenPlusWareLogo from "../../images/kitchenpluswarelogo.png";

const Logo = () => {
  return (
    <Image
      size="mini"
      src={kitchenPlusWareLogo}
      style={{ marginRight: "1.5em" }}
      alt="Kichen+Ware"
    />
  );
};

export default Logo;
