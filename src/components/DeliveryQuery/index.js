import {useState} from "react";

import "./style.scss";

const DeliveryQuery = () => {
  const [deliveryNo, setDeliveryNo] = useState("");

  return (
    <div className="delivery-query">
      <form action="/" method="GET">
        <div className="search-input">
          <input
            type="text"
            name="orderNumber"
            placeholder="Teslimat Numarası Ile Sorgula"
            value={deliveryNo}
            onChange={(e) => setDeliveryNo(e.target.value)}
          />
          <button
            type="submit"
            disabled={deliveryNo.length < 8 || isNaN(deliveryNo)}
          >
            Sorgula
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryQuery;
