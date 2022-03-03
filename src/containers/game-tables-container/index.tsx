import moment from 'moment';
import { useEffect, useState } from 'react';

import { splitTimeInterval } from '~lib/func/split-date-interval';
import { selectCasinoTables } from '~store/casino-tables/casino-tables.slice';
import { selectPresenters } from '~store/game-presenters/game-presenters.slice';
import { useAppSelector } from '~store/store';

export const GameTablesContainer = ({
  shifts = 3,
  shiftLength = 8,
  timeSlotInterval = 20,
}) => {
  const [data, setData] = useState<Array<any>>();
  const [date, setDate] = useState<Date>();
  const [gameTimeSlots, setGameTimeSlots] = useState<Array<string>>();
  const casinoTables = useAppSelector(selectCasinoTables) || [];
  const gamePresenters = useAppSelector(selectPresenters) || [];
  console.log(casinoTables);

  const tablePresentersList = gamePresenters.flatMap((presenter, index) => {
    if (!gameTimeSlots) return;
    return {
      ...presenter,
      table: casinoTables[index],
    };
  });

  const casinoTimesList =
    gameTimeSlots &&
    gameTimeSlots.map((time, index) => {
      return {
        id: index,
        time: `${time}`,
      };
    });

  useEffect(() => {
    setDate(new Date(new Date().setHours(0, 0, 0, 0)));
  }, []);

  /** Set the game time slots e.g 20mins */
  useEffect(() => {
    const gameTimeSlotIntervals = splitTimeInterval(date, 20, 'minutes');
    setGameTimeSlots(gameTimeSlotIntervals);
  }, [date, timeSlotInterval]);

  useEffect(() => {
    const gameTimeSlotIntervals = splitTimeInterval(date, 20, 'minutes');
    const tableData =
      gameTimeSlotIntervals &&
      gameTimeSlotIntervals.map((time, index) => {
        return {
          timeRange: `${time} - ${moment(time, 'hh:mm')
            .add('minutes', timeSlotInterval)
            .format('hh:mm')}`,
          table: gamePresenters.map((presenter, index) => {
            return {
              name: presenter.name,
              games: casinoTables.map((table, index) => {
                return {
                  ...table,
                };
              }),
            };
          }),
        };
      });
    return setData(tableData);
  }, [casinoTables, date, gamePresenters, gameTimeSlots, timeSlotInterval]);

  console.log('data', data);

  const renderPresenterTables = () => {
    return (
      <>
        <thead>
          <tr>
            {data &&
              data.map((item, index) => {
                return <th key={index}>{item?.timeRange}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {gamePresenters &&
            gamePresenters.map((item, index) => {
              console.log('item', item);
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  {casinoTables &&
                    casinoTables.map((item, index) => {
                      return <td key={index}>{item.name}</td>;
                    })}
                </tr>
              );
            })}
        </tbody>
      </>
    );
  };

  return (
    <>
      <table>{renderPresenterTables()}</table>
    </>
  );
};
