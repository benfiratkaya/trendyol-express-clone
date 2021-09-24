import {scrollUp} from "../../helpers/scrollUp";

import "./style.scss";

const ScrollUp = () => {
  return (
    <div
      className="scroll-up"
      onClick={scrollUp}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20">
        <path fill="#FFF" fillRule="evenodd"
              d="M5.994 0c.296 0 .577.134.767.366l4.995 4.947c.236.279.307.666.185 1.013-.122.347-.419.6-.775.66-.357.06-.718-.08-.944-.367L7 3.565V19c0 .552-.448 1-1 1s-1-.448-1-1V3.552L1.765 6.619c-.327.397-.887.477-1.305.206l-.102-.076c-.423-.36-.48-1.003-.126-1.436L5.227.366c.19-.232.47-.366.767-.366z"></path>
      </svg>
    </div>
  );
};

export default ScrollUp;
