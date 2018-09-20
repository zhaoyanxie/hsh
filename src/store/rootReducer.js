import { ADD_RFQ_ITEM, REMOVE_RFQ_ITEM, REDUCE_RFQ_ITEM } from "./types";

const initialState = {
  rfqItems: [],
  id: 0
};

const findRfqItem = (state, action) => {
  return state.rfqItems.filter(item => item.productId === action.productId);
};

const addFirstRfqItem = (newState, action) => {
  return {
    ...newState,
    rfqItems: [
      ...newState.rfqItems,
      {
        productId: action.productId,
        description: action.description,
        code: action.code,
        minQty: action.minQty,
        uom: action.uom,
        qty: 1
      }
    ]
  };
};

const changeRfqQty = (newState, action, newRfqItem, newQty) => {
  const newRfqItemIndex = newState.rfqItems.findIndex(
    item => item.productId === action.productId
  );
  return {
    ...newState,
    rfqItems: [
      ...newState.rfqItems.slice(0, newRfqItemIndex),
      { ...newRfqItem[0], qty: newQty },
      ...newState.rfqItems.slice(newRfqItemIndex + 1)
    ]
  };
};

const rootReducer = (state = initialState, action) => {
  const newState = { ...state };
  const newRfqItem = findRfqItem(state, action);

  switch (action.type) {
    case ADD_RFQ_ITEM:
      newState.id++;
      if (newRfqItem.length === 0) {
        // if the new rfqItem to be added is not in the current list of rfqItems
        return addFirstRfqItem(newState, action);
      } else {
        // new rfqItem exists and only its qty is to be increased
        const newQty = newRfqItem[0].qty + 1;
        return changeRfqQty(newState, action, newRfqItem, newQty);
      }
    case REDUCE_RFQ_ITEM:
      newState.id++;
      const newQty = Math.max(newRfqItem[0].qty - 1, 0);
      return changeRfqQty(newState, action, newRfqItem, newQty);
    case REMOVE_RFQ_ITEM:
      const rfqItems = state.rfqItems.filter(
        item => item.productId !== action.productId
      );
      return { ...state, rfqItems };
    default:
      return state;
  }
};

export default rootReducer;
