import moment from 'moment';

export const addMinutes = (time: Date | string, minutes: number) => {
  return moment(time, 'HH:mm').add(minutes, 'minutes').format('HH:mm');
};
