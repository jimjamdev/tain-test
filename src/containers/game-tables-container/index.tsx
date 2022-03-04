import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useEffect, useState } from 'react';

import { addMinutes } from '~lib/func/add-minutes';
import { splitTimeInterval } from '~lib/func/split-date-interval';
import { selectCasinoTables } from '~store/casino-tables/casino-tables.slice';
import { selectPresenters } from '~store/game-presenters/game-presenters.slice';
import { useAppSelector } from '~store/store';

export const GameTablesContainer = ({
  hours = 24,
  shifts = 3,
  shiftStartHour = 7,
  shiftLength = 8,
  timeSlotInterval = 20,
}) => {
  const [date, setDate] = useState<Date>();
  const [gameTimeSlots, setGameTimeSlots] = useState<Array<any>>();
  const casinoTables = useAppSelector(selectCasinoTables) || [];
  const gamePresenters = useAppSelector(selectPresenters) || [];
  console.log(casinoTables);

  useEffect(() => {
    setDate(new Date(new Date().setHours(shiftStartHour, 0, 0, 0)));
  }, [shiftStartHour]);

  /** Set the game time slots e.g 20mins */
  useEffect(() => {
    const gameTimeSlotIntervals = splitTimeInterval(
      date,
      timeSlotInterval,
      'minutes',
      hours,
    );
    setGameTimeSlots(gameTimeSlotIntervals);
  }, [date, hours, timeSlotInterval]);

  console.log('gameTimeSlots', gameTimeSlots);

  const data = [
    {
      title: 'Morning',
      times: gameTimeSlots,
      presenters: gamePresenters,
      casinoTables: [{ name: 'BlackJack ' }],
    },
    {
      title: 'Afternoon',
      times: gameTimeSlots,
      presenters: gamePresenters,
      casinoTables: [{ name: 'BlackJack ' }],
    },
    {
      title: 'Evening',
      times: gameTimeSlots,
      presenters: gamePresenters,
      casinoTables: [{ name: 'BlackJack ' }],
    },
  ];

  const renderTableTimes = (times = []) => {
    return times.map((time, index) => {
      if (!time) return;
      console.log('time', time);
      const toTime = addMinutes(time, timeSlotInterval);
      return (
        <TableCell key={index}>
          {time} - {toTime}
        </TableCell>
      );
    });
  };

  const renderTableGames = () => {
    const tableColumnCount = Math.round(shiftLength);
    return [...Array(tableColumnCount)].map(() => {
      return casinoTables.map((table, index) => {
        return <TableCell key={index}>{table.name}</TableCell>;
      });
    });
  };

  const renderTable = () => {
    return data.map((d, index) => {
      const times = d.times && d.times[index];
      return (
        <TableContainer key={d.title} component={Paper}>
          <Table>
            <TableHead>
              <Toolbar>
                <Typography>{d.title}</Typography>
              </Toolbar>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                {renderTableTimes(times)}
              </TableRow>
            </TableHead>
            <TableBody>
              {d.presenters.map((row) => {
                return (
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    {renderTableGames()}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      );
    });
  };

  return <>{renderTable()}</>;
};
