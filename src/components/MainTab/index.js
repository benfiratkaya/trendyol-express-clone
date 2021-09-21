import {useState} from 'react';
import DeliveryStatus from "../DeliveryStatus";
import DeliveryOperations from "../DeliveryOperations";

import "./style.scss";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("DELIVERY_STATUS");

  return (
    <div className="main-tab">
      <nav>
        <div className="tabs">
          <div className="tab" data-active={activeTab === "DELIVERY_STATUS"}
               onClick={() => setActiveTab("DELIVERY_STATUS")}>
            Gönderi Durumu
          </div>
          <div className="tab" data-active={activeTab === "DELIVERY_OPERATION"}
               onClick={() => setActiveTab("DELIVERY_OPERATION")}>
            Gönderi İşlemleri
          </div>
        </div>
      </nav>
      <div className="tab-panels">
        {activeTab === "DELIVERY_STATUS" ? (<DeliveryStatus/>) : (<DeliveryOperations/>)}
      </div>
    </div>
  );
};

export default MainTab;
