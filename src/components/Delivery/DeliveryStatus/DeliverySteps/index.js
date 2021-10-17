import {connect} from "react-redux";

import {operationalStep} from "../../../../helpers/operationalStep";

import "./style.scss";

const DeliverySteps = ({operationalState}) => {
  const OPERATION_STEP = operationalStep(operationalState);

  return (
    <div className="delivery-steps">
      <div className="step" data-active={OPERATION_STEP >= 1}>
        <div className="circle">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
            <path
              d="M28 18c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.41 0-8 3.59-8 8 0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8zm-.828-20c.801 0 1.555.312 2.121.879l5.414 5.414c.092.092.166.202.216.325.051.123.077.252.077.382v9h-2V8h-9v4c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1V8H2v24h14v2H2c-1.102 0-2-.897-2-2V7l.007-.036c.003-.072.025-.14.043-.211.015-.056.022-.115.046-.167.024-.052.064-.096.097-.144.042-.06.079-.121.133-.171l.022-.028L6.756.727C7.301.258 7.996 0 8.713 0zm.829 22.5c.552 0 1 .448 1 1V28c0 .265-.106.52-.293.707l-2.25 2.25c-.195.195-.451.293-.707.293-.256 0-.512-.098-.707-.293-.391-.39-.391-1.023 0-1.414L27 27.586V23.5c0-.552.446-1 1-1zM14 27v2H6v-2h8zm16-12c.552 0 1 .448 1 1H31v1l-.983-.001-.016.001H25v-1l.007-.116c.058-.497.48-.884.994-.884zM22 8h-9v3h9V8zm-8.618-6H8.713c-.239 0-.47.086-.652.243L3.696 6h7.686l2-4zm13.79 0h-5.553l2 4h7.967l-3.707-3.707c-.186-.186-.444-.293-.707-.293zm-7.79 0h-3.763l-2 4h7.763l-2-4z"></path>
          </svg>
        </div>
        <div className="title">1.Gönderi Alındı</div>
      </div>
      <div className="step" data-active={OPERATION_STEP >= 2}>
        <div className="circle">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="47" height="37" viewBox="0 0 47 37">
            <path
              d="M27.172 0c.8 0 1.554.312 2.12.88l5.415 5.412c.091.093.166.203.216.326.05.122.077.252.077.382v9h-2V8h-9v4c0 .553-.447 1-1 1H12c-.553 0-1-.447-1-1V8H2v24h34c.553 0 1 .448 1 1v.919l7.399-5.92L37 22.082V23c0 .553-.447 1-1 1h-7c-.553 0-1-.447-1-1 0-.552.447-1 1-1h6v-2c0-.385.221-.734.566-.901.345-.168.758-.12 1.059.12l10 8c.237.19.375.478.375.78 0 .305-.138.592-.375.782l-10 8c-.181.145-.402.219-.625.219-.147 0-.295-.032-.434-.098-.345-.167-.566-.517-.566-.902v-2H2c-1.102 0-2-.897-2-2V7c0-.013.006-.024.006-.036.004-.073.025-.14.043-.21.016-.058.022-.116.046-.169.024-.052.065-.095.097-.144.042-.059.08-.12.134-.17.007-.008.012-.02.021-.029L6.756.726C7.3.258 7.996 0 8.713 0zM14 27v2H5v-2h9zm11-5c.553 0 1 .447 1 1 0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1 0-.553.447-1 1-1zM22 8h-9v3h9V8zM13.38 2H8.713c-.24 0-.47.086-.653.242L3.696 6h7.685l2-4zm6 0H15.62l-2 4h7.762l-2-4zm7.79 0H21.62l2 4h7.967l-3.707-3.707c-.187-.186-.444-.293-.707-.293z"></path>
          </svg>
        </div>
        <div className="title">2.Transfer Merkezinde</div>
      </div>
      <div className="step" data-active={OPERATION_STEP >= 3}>
        <div className="circle">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32">
            <path
              d="M35 0c1.103 0 2 .897 2 2v28h.056c.521 0 .944.447.944 1 0 .553-.423 1-.944 1H.944C.423 32 0 31.553 0 31c0-.553.423-1 .944-1H1V2c0-1.103.897-2 2-2zm0 2H3v28h4V10h24v20h4V2zm-6 21h-7v7h7v-7zm-9-11H9v18h11V12zm9 0h-7v9h7v-9zm-2-7v2H11V5h16z"></path>
          </svg>
        </div>
        <div className="title">3.Teslimat Şubesinde</div>
      </div>
      <div className="step" data-active={OPERATION_STEP >= 4}>
        <div className="circle">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 44 33">
            <path
              d="M10 23c2.761 0 5 2.238 5 5s-2.239 5-5 5c-2.419 0-4.437-1.717-4.9-4H2v-2h3.1c.463-2.283 2.481-4 4.9-4zM27 0c.513 0 .935.386.993.884L28 1v6h7.302c1.324 0 2.573.668 3.311 1.757l.119.185 4.698 7.831c.331.552.524 1.175.562 1.817l.008.241v7.17c0 1.594-1.25 2.903-2.824 2.994L41 29l-1.1.001C39.436 31.283 37.418 33 35 33s-4.436-1.717-4.9-3.999H17v-2h9V2H4V0h23zM10 25c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm25 0c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm.302-16H28v18h2.1c.463-2.282 2.481-4 4.9-4 2.419 0 4.437 1.718 4.9 4H41c.512 0 .935-.388.993-.883L42 26v-7.169c0-.302-.068-.599-.2-.87l-.085-.159-4.698-7.832C36.657 9.372 36 9 35.302 9zM14.678 6.666c.356-.163.777-.102 1.072.157l7.514 6.575c.228.2.353.49.342.792-.011.3-.159.58-.4.762l-7.515 5.635c-.177.132-.388.2-.6.2-.153 0-.306-.035-.447-.105-.34-.17-.553-.515-.553-.894v-1.819H7.577c-.553 0-1-.447-1-1 0-.55.447-1 1-1h7.514c.553 0 1 .45 1 1v.819l4.928-3.696-4.928-4.313v.616c0 .552-.447 1-1 1H5.697c-.553 0-1-.448-1-1 0-.553.447-1 1-1h8.394V7.576c0-.393.23-.748.587-.91zm-11.8 2.729c.554 0 1 .447 1 1 0 .512-.385.935-.882.993l-.117.007H.999c-.552 0-1-.448-1-1 0-.514.386-.936.884-.994L1 9.395h1.879z"></path>
          </svg>
        </div>
        <div className="title">4.Kurye Dağıtımda</div>
      </div>
      <div className="step" data-active={OPERATION_STEP >= 5}>
        <div className="circle">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
            <path
              d="M28 18c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-.828-20c.8 0 1.554.312 2.12.879l5.415 5.414c.091.092.165.202.216.325.05.123.077.252.077.382v9h-2V8h-9v4c0 .553-.447 1-1 1H12c-.553 0-1-.447-1-1V8H2v24h14v2H2c-1.102 0-2-.897-2-2V7l.006-.036c.004-.072.026-.14.043-.211.015-.056.023-.115.047-.167.024-.052.063-.096.096-.144.043-.06.08-.121.134-.171l.021-.028L6.755.727C7.301.257 7.995 0 8.712 0zm4.06 24.36c.353-.424.981-.481 1.408-.128.424.354.482.984.128 1.408l-5 6c-.18.216-.442.346-.724.359H27c-.265 0-.52-.104-.707-.292l-3-3c-.39-.39-.39-1.023 0-1.414s1.023-.391 1.414 0l2.225 2.226zM14 27v2H5v-2h9zm8-19h-9v3h9V8zM13.38 2H8.712c-.239 0-.47.086-.651.243L3.696 6h7.685l2-4zm13.79 0H21.62l2 4h7.967l-3.707-3.707c-.187-.186-.445-.293-.707-.293zm-7.79 0H15.62l-2 4h7.762l-2-4z"></path>
          </svg>
        </div>
        <div className="title">5.Teslim Edildi</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    operationalState: state.delivery.data.operationalState
  };
};

export default connect(mapStateToProps)(DeliverySteps);