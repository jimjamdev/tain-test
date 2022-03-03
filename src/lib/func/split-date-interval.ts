import moment from 'moment';

export const splitTimeInterval = (
  startTime?: Date,
  interval = 30,
  period = 'minutes',
) => {
  const periodsInADay = moment
    .duration(1, 'day')
    .as(
      <
        | 'year'
        | 'years'
        | 'y'
        | 'month'
        | 'months'
        | 'M'
        | 'week'
        | 'weeks'
        | 'w'
        | 'day'
        | 'days'
        | 'd'
        | 'hour'
        | 'hours'
        | 'h'
        | 'minute'
        | 'minutes'
        | 'm'
        | 'second'
        | 'seconds'
        | 's'
        | 'millisecond'
        | 'milliseconds'
        | 'ms'
      >period,
    );

  const timeLabels = [];
  const startTimeMoment = moment(startTime, 'hh:mm');
  for (let i = 0; i <= periodsInADay; i += interval) {
    // @ts-ignore
    startTimeMoment.add(i === 0 ? 0 : interval, period);
    timeLabels.push(startTimeMoment.format('HH:mm'));
  }

  timeLabels.pop();

  return timeLabels;
};
