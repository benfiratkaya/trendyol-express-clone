import {useState} from "react";
import {connect} from "react-redux";

import DeliveryTable from "./DeliveryTable";

import {formatDate, getDateFromUnix} from "../../../helpers/getDate";

import "./style.scss";

const DeliveryMovements = ({delivery}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="delivery-movements">
      <div className="card">
        <div className="delivery-info">
          <div className="delivery-no">
            <div className="title">Teslimat Numarsı:</div>
            <div className="content">{delivery.orderNumber}</div>
          </div>
          <div className="delivery-detail">
            <div className="detail">
              <div className="title">Teslim Alacak:</div>
              <div className="content">{delivery.targetCustomer}</div>
            </div>
            <div className="detail">
              <div className="title">Gönderi Numarası:</div>
              <div className="content">{delivery.deliveryNumber}</div>
            </div>
            <div className="detail">
              <div className="title">Son İşlem Tarihi:</div>
              <div className="content">{getDateFromUnix(delivery.trackingHistoryList?.[0].actionDate)}</div>
            </div>
            <div className="detail">
              <div className="title">Tahmini Teslim Tarihi:</div>
              <div className="content">{formatDate(delivery.estimatedDeliveryDate)}</div>
            </div>
            <div className="detail">
              <div className="title">Teslim Edilecek Şube:</div>
              <div className="content">{delivery.targetXDock}</div>
            </div>
            <div className="detail">
              <div className="title">Teslim Edilecek Adres:</div>
              <div className="content">{delivery.targetAddress}</div>
            </div>
          </div>
        </div>
        {showDetails && <DeliveryTable/>}
        <button className="btn-detail" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Detayı Gizle" : "Daha Fazla Göster"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    delivery: state.delivery.data
  };
};

export default connect(mapStateToProps)(DeliveryMovements);
