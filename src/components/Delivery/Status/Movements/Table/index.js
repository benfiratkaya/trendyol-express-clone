import {connect} from "react-redux";

import ScrollUp from "../../../../ScrollUp";

import "./style.scss";
import TableItem from "./Item";

const DeliveryTable = ({trackingHistoryList}) => {
  return (
    <div className="delivery-table">
      <ul className="table-head">
        <li>Tarih</li>
        <li>Durum</li>
        <li>Açıklama</li>
        <li>Lokasyon</li>
      </ul>
      {trackingHistoryList.map(item => (
        <TableItem
          actionDate={item.actionDate}
          operationalState={item.operationalState}
          description={item.description}
          location={item.location}
        />
      ))}
      <ScrollUp/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    trackingHistoryList: state.delivery.data.trackingHistoryList
  };
};

export default connect(mapStateToProps)(DeliveryTable);
