import DeliverySteps from "./DeliverySteps";
import DeliveryStatusTitle from "./DeliveryStatusTitle";
import DeliveryMovements from "./DeliveryMovements";

import "./style.scss";

const DeliveryStatus = () => {
  return (
    <div className="delivery-status">
      <DeliveryStatusTitle/>
      <DeliverySteps/>
      <DeliveryMovements/>
    </div>
  );
};

export default DeliveryStatus;
