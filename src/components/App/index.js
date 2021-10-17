import Logo from "../Logo";
import Delivery from "../Delivery";
import DeliveryQuery from "../DeliveryQuery";
import Footer from "../Footer";

import "./style.scss";

const App = () => {
  return (
    <div className="app">
      <Logo/>
      <Delivery/>
      <DeliveryQuery/>
      <Footer/>
    </div>
  );
};

export default App;