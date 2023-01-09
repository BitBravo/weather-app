import moment from 'moment';

export const getCelsiusFromFahrenheit = (fahrenheit: number) => {
  return Math.floor(((fahrenheit - 32) * 5) / 9) + '°';
};

export const getWeekday = (seconds: number) => {
  return moment.unix(seconds).format('ddd');
};
