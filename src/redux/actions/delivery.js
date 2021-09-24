import axios from "axios";

import * as t from "../types/delivery";

export const fetchDelivery = (type, key) => {
  return {
    type: t.FETCH_DELIVERY,
    payload: axios.get(`https://api-logistics.trendyol.com/u/track/?${type}=${key}`)
      .then((response) => response.data)
      .catch((response) => Promise.reject({response})),
  };
};
