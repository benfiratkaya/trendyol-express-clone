import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://github.com/benfiratkaya/trendyol-express-clone" target="_blank" rel="noreferrer">
          Coded by: Fırat Kaya
        </a>
      </div>
      <div className="customer-service">
        <div className="customer-service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <g fill="#F16623" fillRule="nonzero" stroke="#F16623" strokeWidth="1.2">
                <g>
                  <path
                    d="M11.25 19.031H7.545C8.171 10.5 15.312 3.75 24 3.75c6.875 0 13.096 4.33 15.48 10.776.36.97 1.438 1.467 2.41 1.108.97-.36 1.467-1.438 1.108-2.41-1.421-3.841-3.946-7.128-7.301-9.506C32.265 1.286 28.22 0 24 0 18.591 0 13.506 2.106 9.681 5.931 5.906 9.706 3.807 14.71 3.753 20.04 1.512 21.337 0 23.76 0 26.53v6.375c0 4.136 3.365 7.5 7.5 7.5h3.75c1.036 0 1.875-.84 1.875-1.875V20.906c0-1.035-.84-1.875-1.875-1.875zM9.375 36.656H7.5c-2.068 0-3.75-1.682-3.75-3.75v-6.375c0-2.067 1.682-3.75 3.75-3.75h1.875v13.875z"
                    transform="translate(-559 -1048) translate(560 1049)"></path>
                  <path
                    d="M40.5 19.031h-3.75c-1.036 0-1.875.84-1.875 1.875V40.5c0 1.034-.841 1.875-1.875 1.875h-5.719v.06C26.641 41.28 25.412 40.5 24 40.5c-2.071 0-3.75 1.679-3.75 3.75 0 2.071 1.679 3.75 3.75 3.75 1.412 0 2.642-.781 3.281-1.934v.059H33c3.102 0 5.625-2.523 5.625-5.625v-.094H40.5c4.136 0 7.5-3.364 7.5-7.5v-6.375c0-4.135-3.364-7.5-7.5-7.5zm3.75 13.875c0 2.068-1.682 3.75-3.75 3.75h-1.875V22.781H40.5c2.068 0 3.75 1.683 3.75 3.75v6.375z"
                    transform="translate(-559 -1048) translate(560 1049)"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="customer-service-content">
          <div className="customer-service-title">
            Müşteri Hizmetleri
          </div>
          <div className="customer-service-phone-number">
            0850 759 15 15
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
