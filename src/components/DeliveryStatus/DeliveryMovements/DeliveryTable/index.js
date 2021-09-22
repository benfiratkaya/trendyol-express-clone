import ScrollUp from "../../../ScrollUp";

import "./style.scss";

const DeliveryTable = () => {
  return (
    <div className="delivery-table">
      <ul className="table-head">
        <li>Tarih</li>
        <li>Durum</li>
        <li>Açıklama</li>
        <li>Lokasyon</li>
      </ul>
      <ul className="table-body">
        <li>22.09.2021 11:57</li>
        <li>Teslim Edildi</li>
        <li>fi** (KENDİSİ)</li>
        <li>Toprak Şube</li>
      </ul>
      <ScrollUp/>
    </div>
  );
};

export default DeliveryTable;
