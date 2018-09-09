import React from "react";
import { Icon } from "semantic-ui-react";

const Title = () => {
  return (
    <div>
      <h1>
        Kitchen
        <Icon name="plus" color="red" style={{ margin: 0 }} />
        Ware
      </h1>
      <h2>Insert sub heading</h2>
    </div>
  );
};

export default Title;
