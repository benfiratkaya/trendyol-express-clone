import {useEffect} from "react";
import {connect} from "react-redux";

import {fetchDelivery} from "../../redux/actions/delivery";

import MainTab from "./MainTab";
import DeliveryLoading from "../Delivery/DeliveryLoading";
import DeliveryNotFound from "../Delivery/DeliveryNotFound";

const Delivery = ({delivery, fetchDelivery}) => {
  const deliveryToken = new URLSearchParams(window.location.search).get("token");
  const orderNumber = new URLSearchParams(window.location.search).get("orderNumber");

  useEffect(() => {
    if (deliveryToken)
      fetchDelivery("token", deliveryToken);
    else if (orderNumber)
      fetchDelivery("orderNumber", orderNumber);
  }, [deliveryToken, orderNumber, fetchDelivery]);

  if (deliveryToken || orderNumber) {
    if (delivery.fetching) return <DeliveryLoading/>
    if (delivery.error.status) return <DeliveryNotFound/>

    return <MainTab/>
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    delivery: state.delivery
  };
};

const mapDispatchToProps = {
  fetchDelivery
};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);