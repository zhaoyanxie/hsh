import { ADD_RFQ_ITEM, REMOVE_RFQ_ITEM } from "./types";

export const addRfqItem = newRfqItem => {
  return {
    type: ADD_RFQ_ITEM,
    newRfqItem
  };
};

export const removeRfqItem = productId => {
  return {
    type: REMOVE_RFQ_ITEM,
    productId
  };
};
