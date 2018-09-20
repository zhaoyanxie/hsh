import React from "react";
import { Icon, Label } from "semantic-ui-react";
import {
  ADD_RFQ_ITEM,
  REMOVE_RFQ_ITEM,
  REDUCE_RFQ_ITEM
} from "../../store/types";

const QtyCounter = props => {
  return (
    <div style={{ height: "80px" }}>
      <Icon
        name="angle up"
        size="large"
        style={{
          width: "30px",
          height: "20px",
          display: "inline-block",
          position: "absolute",
          top: "0px",
          left: "0",
          cursor: "pointer"
        }}
        onClick={event =>
          props.handleIncreaseDecrease(event, props.item, ADD_RFQ_ITEM)
        }
      />
      <Label
        content={props.item.qty}
        size="large"
        style={{
          width: "30px",
          height: "30px",
          padding: "10px 0",
          margin: "0",
          textAlign: "center",
          background: "transparent",
          display: "inline-block",
          position: "absolute",
          top: "18px",
          left: "0"
        }}
      />
      <Icon
        name="angle down"
        size="large"
        style={{
          width: "30px",
          height: "20px",
          display: "inline-block",
          position: "absolute",
          top: "50px",
          left: "0",
          cursor: "pointer"
        }}
        onClick={event =>
          props.handleIncreaseDecrease(event, props.item, REDUCE_RFQ_ITEM)
        }
      />
      <Icon
        name="trash alternate outline"
        style={{
          position: "absolute",
          top: "25px",
          left: "35px",
          cursor: "pointer"
        }}
        onClick={event =>
          props.handleIncreaseDecrease(event, props.item, REMOVE_RFQ_ITEM)
        }
      />
    </div>
  );
};

export default QtyCounter;
