import React from "react";
import { Icon, Label } from "semantic-ui-react";
import {
  ADD_RFQ_ITEM,
  REMOVE_RFQ_ITEM,
  REDUCE_RFQ_ITEM
} from "../../store/types";

const QtyCounter = props => {
  return (
    <div>
      <Icon
        name="angle up"
        size="large"
        style={{
          display: "inline-block",
          position: "relative",
          top: "0px",
          left: "15px",
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
          textAlign: "center",
          background: "transparent",
          display: "inline-block",
          position: "relative",
          top: "18px",
          left: "-18px",
          padding: "0 1px"
        }}
      />
      <Icon
        name="angle down"
        size="large"
        style={{
          display: "inline-block",
          position: "relative",
          top: "34px",
          left: "-48px",
          cursor: "pointer"
        }}
        onClick={event =>
          props.handleIncreaseDecrease(event, props.item, REDUCE_RFQ_ITEM)
        }
      />
      <Icon
        name="trash alternate outline"
        style={{
          position: "relative",
          top: "18px",
          left: "-50px",
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
