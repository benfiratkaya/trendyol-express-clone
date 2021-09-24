import {connect} from "react-redux";

import {operationalStep} from "../../../helpers/operationalStep";

import "./style.scss";

const DeliveryStatusTitle = ({operationalState}) => {
  const OPERATION_STEP = operationalStep(operationalState);

  const title = {
    1: "Gönderiniz Alındı",
    2: "Gönderiniz Transfer Merkezi",
    3: "Gönderiniz Teslimat Şubesinde",
    4: "Gönderiniz Kurye Dağıtımında",
    5: "Gönderiniz Teslim Edildi"
  }

  return (
    <div className="delivery-status-title">
      {title[OPERATION_STEP]}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    operationalState: state.delivery.data.operationalState
  };
};

export default connect(mapStateToProps)(DeliveryStatusTitle);