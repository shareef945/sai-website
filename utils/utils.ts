export const dateToComparableNumber = (dateString:string) => {
  const [month, year] = dateString.split(" ");
  const monthNumber = new Date(Date.parse(month + " 1, 2012")).getMonth() + 1;
  return parseInt(year) * 100 + monthNumber;
};

