import "./style.scss";

const DeliveryNotFound = () => {
  return (
    <div className="delivery-not-found">
      <div className="title">
        Gönderi Bulunamadı!
      </div>
      <div className="content">
        Verilen bilgiye ait gönderi bulunamamıştır.
      </div>
    </div>
  );
};

export default DeliveryNotFound;
