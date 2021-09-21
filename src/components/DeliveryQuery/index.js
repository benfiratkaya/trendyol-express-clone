import {useState} from "react";

import "./style.scss";

const DeliveryQuery = () => {
  const [deliveryNo, setDeliveryNo] = useState("");

  return (
    <div className="delivery-query">
      <div className="query-input">
        <input type="text" placeholder="Teslimat Numarası Ile Sorgula" value={deliveryNo}
               onChange={(e) => setDeliveryNo(e.target.value)}/>
        <button disabled={deliveryNo.length < 8 || isNaN(deliveryNo)}>Sorgula</button>
      </div>
    </div>
  );
};

export default DeliveryQuery;
