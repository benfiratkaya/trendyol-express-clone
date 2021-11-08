import {getDateFromUnix} from "../../../../../../helpers/getDate";

const TableItem = ({actionDate, operationalState, description, location}) => {
  let operationalStateText = {
    0: "Gönderi Alındı",
    1: "Gönderi",
    2: "Transfer Merkezinde",
    3: "Gönderi Yola Çıktı (Teslimat şubesine)",
    4: "Teslimat Şubesine Ulaştı",
    5: "Teslimat Şubesine Ulaştı",
    6: "Kurye Dağıtımda",
    7: "Teslim Edildi",
    8: "Gönderi",
    9: "Gönderi",
    10: "Gönderi",
    11: "Gönderi Yola Çıktı (Transfer merkezine)"
  };


  return (
    <ul className="table-body">
      <li>{getDateFromUnix(actionDate)}</li>
      <li>{operationalStateText[operationalState]}</li>
      <li>{description}</li>
      <li>{location}</li>
    </ul>
  );
};

export default TableItem;
