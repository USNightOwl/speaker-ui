import moment from "moment";

export function formatDate(date: string) {
  const convertDate = new Date(date);
  return moment(convertDate).format("DD-MM-YYYY");
}
