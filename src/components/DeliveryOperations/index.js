import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import "./style.scss";

const DeliveryOperations = () => {
  return (
    <div className="delivery-operations">
      <Tabs className="card">
        <TabList>
          <Tab>
            <div className="icon">
              <svg width="25" height="22" viewBox="0 0 29 22">
                <path
                  d="M13 0v5h-2V2H2v18h9v-3h2v5H0V0h13zm16 0v22H16v-5h2v3h9V2h-9v3h-2V0h13zM11.293 7.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414L11.414 10H20c.552 0 1 .448 1 1s-.448 1-1 1h-8.586l1.293 1.293c.391.391.391 1.023 0 1.414-.195.195-.45.293-.707.293-.256 0-.512-.098-.707-.293l-3-3c-.39-.391-.39-1.023 0-1.414zM5 10c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm19 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
                  fill="#afbbca"></path>
              </svg>
            </div>
            <div className="text">KOMŞUMA BIRAK</div>
          </Tab>
          <Tab>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15.3849 1.43994C20.1349 1.43994 24 5.39859 24 10.266C24 16.8074 16.269 22.1635 15.94 22.3878C15.772 22.5026 15.5779 22.5599 15.3849 22.5599C15.1919 22.5599 14.9979 22.5026 14.8299 22.3878C14.5009 22.1635 6.76887 16.8074 6.76887 10.266C6.76887 5.39859 10.6349 1.43994 15.3849 1.43994ZM5.23904 5.19237C5.77005 5.03563 6.32407 5.35117 6.47607 5.89518C6.62708 6.43918 6.32007 7.00675 5.78906 7.16145C3.55804 7.8161 2.00004 9.93477 2.00004 12.3147C2.00004 15.8635 5.78204 19.144 7.23105 20.2709C7.60406 19.98 8.13108 19.5466 8.70809 19.0026C9.11409 18.6184 9.74707 18.6461 10.1211 19.063C10.4951 19.479 10.4691 20.1265 10.0621 20.5096C8.84006 21.6632 7.82806 22.3588 7.78605 22.3875C7.61805 22.5023 7.42406 22.5596 7.23105 22.5596C7.03805 22.5596 6.84406 22.5023 6.67605 22.3875C6.40405 22.2021 0 17.765 0 12.3147C0 9.02502 2.15402 6.09598 5.23904 5.19237ZM15.3849 3.48894C11.7369 3.48894 8.76885 6.52861 8.76885 10.266C8.76885 14.8024 13.7009 18.9793 15.3849 20.2733C17.0689 18.9793 22 14.8014 22 10.266C22 6.52861 19.0319 3.48894 15.3849 3.48894ZM15.3849 7.66509C16.7869 7.66509 17.9229 8.82995 17.9229 10.2663C17.9229 11.7016 16.7869 12.8665 15.3849 12.8665C13.9829 12.8665 12.8459 11.7016 12.8459 10.2663C12.8459 8.82995 13.9829 7.66509 15.3849 7.66509Z"
                  fill="#afbbca"></path>
              </svg>
            </div>
            <div className="text">FARKLI ADRESE GELSİN</div>
          </Tab>
          <Tab>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g stroke="#AFBBCA" stroke-width="2">
                    <g transform="translate(-764 -275) translate(765 276)">
                      <rect width="18" height="17" y="2" rx="2"></rect>
                      <path d="M13 0L13 4M5 0L5 4M0 8L18 8"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="text">İSTEDİĞİM ZAMAN GELSİN</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="form">
            <div className="form-group">
              <span className="title">Teslimat Numaranızı Girin</span>
              <div className="search-input">
                <input type="text" placeholder="Teslimat Numarası"/>
                <button disabled={true}>Ara</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="form">
            <div className="form-group">
              <span className="title">Teslimat Numaranızı Girin</span>
              <div className="search-input">
                <input type="text" placeholder="Teslimat Numarası"/>
                <button disabled={true}>Ara</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="form">
            <div className="form-group">
              <span className="title">Teslimat Numaranızı Girin</span>
              <div className="search-input">
                <input type="text" placeholder="Teslimat Numarası"/>
                <button disabled={true}>Ara</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DeliveryOperations;
