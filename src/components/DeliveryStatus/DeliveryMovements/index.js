import "./style.scss";
import {useState} from "react";
import DeliveryTable from "./DeliveryTable";

const DeliveryMovements = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="delivery-movements">
      <div className="card">
        <div className="delivery-info">
          <div className="delivery-no">
            <div className="title">Teslimat Numarsı:</div>
            <div className="content">111111111</div>
          </div>
          <div className="delivery-detail">
            <div className="detail">
              <div className="title">Teslim Alacak:</div>
              <div className="content">Me** Fı** ****</div>
            </div>
            <div className="detail">
              <div className="title">Gönderi Numarası:</div>
              <div className="content">Me** Fı** ****</div>
            </div>
            <div className="detail">
              <div className="title">Son İşlem Tarihi:</div>
              <div className="content">Me** Fı** ****</div>
            </div>
            <div className="detail">
              <div className="title">Tahmini Teslim Tarihi:</div>
              <div className="content">Me** Fı** ****</div>
            </div>
            <div className="detail">
              <div className="title">Teslim Edilecek Şube:</div>
              <div className="content">Me** Fı** ****</div>
            </div>
            <div className="detail">
              <div className="title">Teslim Edilecek Adres:</div>
              <div className="content">Me** Fı** ****</div>
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

export default DeliveryMovements;
