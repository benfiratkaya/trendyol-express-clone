import * as t from "../types/delivery";

const initialState = {
  fetching: false,
  fetched: false,
  data: {},
  error: {},
};

const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.FETCH_DELIVERY_PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        data: {},
        error: {},
      };
    case t.FETCH_DELIVERY_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        data: {},
        error: action.payload,
      };
    case t.FETCH_DELIVERY_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
        error: {},
      };
    default:
      return state;
  }
};

export default deliveryReducer;
