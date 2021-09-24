import {useEffect} from "react";
import {connect} from "react-redux";

import {fetchDelivery} from "../../redux/actions/delivery";

import Logo from "../Logo";
import MainTab from "../MainTab";
import Footer from "../Footer";

import "./style.scss";
import DeliveryLoading from "../DeliveryLoading";
import DeliveryQuery from "../DeliveryQuery";
import DeliveryNotFound from "../DeliveryNotFound";

const App = ({delivery, fetchDelivery}) => {
  const deliveryToken = new URLSearchParams(window.location.search).get("token");
  const orderNumber = new URLSearchParams(window.location.search).get("orderNumber");

  useEffect(() => {
    if (deliveryToken)
      fetchDelivery("token", deliveryToken);
    else if (orderNumber)
      fetchDelivery("orderNumber", orderNumber);
  }, [deliveryToken, orderNumber, fetchDelivery]);

  return (
    <div className="app">
      <Logo/>
      {(deliveryToken || orderNumber) && (delivery.fetching ? <DeliveryLoading/> : (delivery.error.status) ?
        <DeliveryNotFound/> : <MainTab/>)}
      <DeliveryQuery/>
      <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    delivery: state.delivery
  };
};

const mapDispatchToProps = {
  fetchDelivery
};

export default connect(mapStateToProps, mapDispatchToProps)(App);