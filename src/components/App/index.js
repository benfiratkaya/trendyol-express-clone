import Logo from "../Logo";
import MainTab from "../MainTab";
import Footer from "../Footer";

import "./style.scss";
import DeliveryQuery from "../DeliveryQuery";

const App = () => {
  return (
    <div className="app">
      <Logo/>
      <MainTab/>
      <DeliveryQuery/>
      <Footer/>
    </div>
  );
};

export default App;