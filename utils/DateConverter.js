export const DateConverter = (date) => {
  return new Date(date.year, date.month - 1, date.day);
};
