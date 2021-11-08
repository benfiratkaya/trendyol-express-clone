import DeliverySteps from "./Steps";
import DeliveryStatusTitle from "./Title";
import DeliveryMovements from "./Movements";

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
