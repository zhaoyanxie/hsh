import { ADD_RFQ_ITEM, REMOVE_RFQ_ITEM } from "./types";

const initialState = {
  rfqItems: [],
  id: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RFQ_ITEM:
      const newState = { ...state };
      const newRfqItem = state.rfqItems.filter(
        item => item.productId === action.productId
      );
      newState.id++;

      if (newRfqItem.length === 0) {
        // if the new rfqItem to be added is not in the current list of rfqItems
        return {
          ...newState,
          rfqItems: [
            ...newState.rfqItems,
            { productId: action.productId, qty: 1 }
          ]
        };
      } else {
        // new rfqItem exists and only its qty is to be increased
        const newRfqItemIndex = state.rfqItems.findIndex(
          item => item.productId === action.productId
        );
        const newQty = state.rfqItems[newRfqItemIndex].qty + 1;
        return {
          ...newState,
          rfqItems: [
            ...newState.rfqItems.slice(0, newRfqItemIndex),
            { productId: action.productId, qty: newQty },
            ...newState.rfqItems.slice(newRfqItemIndex + 1)
          ]
        };
      }
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
