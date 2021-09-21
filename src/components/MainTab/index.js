import { useState } from 'react';

import "./style.scss";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("DELIVERY_STATUS");

  return (
    <div className="main-tab">
      <nav>
        <div className="tabs">
          <div className="tab" data-active={activeTab === "DELIVERY_STATUS"} onClick={() => setActiveTab("DELIVERY_STATUS")}>Gönderi Durumu</div>
          <div className="tab" data-active={activeTab === "DELIVERY_OPERATION"} onClick={() => setActiveTab("DELIVERY_OPERATION")}>Gönderi İşlemleri</div>
        </div>
      </nav>
      <div className="tab-panels">
        {activeTab === "DELIVERY_STATUS" ? "asd" : "fdsfds"}
      </div>
    </div>
  );
};

export default MainTab;
