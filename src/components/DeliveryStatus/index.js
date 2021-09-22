import DeliveryQuery from "./DeliveryQuery";
import DeliverySteps from "./DeliverySteps";
import DeliveryStatusTitle from "./DeliveryStatusTitle";
import DeliveryMovements from "./DeliveryMovements";

import "./style.scss";

const DeliveryStatus = () => {
  return (
    <div className="delivery-status">
      <DeliveryStatusTitle>Gönderiniz Yolda</DeliveryStatusTitle>
      <DeliverySteps/>
      <DeliveryMovements/>
      <DeliveryQuery/>
    </div>
  );
};

export default DeliveryStatus;
