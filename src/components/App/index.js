import Logo from "../Logo";
import MainTab from "../MainTab";
import Footer from "../Footer";

import "./style.scss";

const App = () => {
  return (
    <div className="app">
      <Logo/>
      <MainTab/>
      <Footer/>
    </div>
  );
};

export default App;