import moment from "moment";

export const getDateFromUnix = (unixTime) => {
  return moment(unixTime).format("DD.MM.YYYY HH:MM");
};

export const formatDate = (date) => {
  return moment(date).format("DD.MM.YYYY");
};