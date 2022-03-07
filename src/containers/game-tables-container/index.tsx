import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

import { addMinutes } from '~lib/func/add-minutes';
import { moveInArray } from '~lib/func/move-in-array';
import { splitTimeInterval } from '~lib/func/split-time-interval';
import { selectCasinoTables } from '~store/casino-tables/casino-tables.slice';
import { selectPresenters } from '~store/game-presenters/game-presenters.slice';
import { useAppSelector } from '~store/store';
import { ICasinoTables } from '~types/casino';

export const GameTablesContainer = ({
  hours = 24,
  // shiftHours = 3,
  shiftStartHour = 7,
  shiftLengthHours = 8,
  timeSlotInterval = 20,
}) => {
  const [date, setDate] = useState<Date>();
  const [gameTimeSlots, setGameTimeSlots] = useState<Array<any>>([]);
  const [transformedCasinoTables, setTransformedCasinoTables] = useState<
    Array<any>
  >([]);
  const casinoTables = useAppSelector(selectCasinoTables) || [];
  const gamePresenters = useAppSelector(selectPresenters) || [];

  const data = [
    {
      title: 'Morning Shift',
      times: gameTimeSlots,
      presenters: gamePresenters,
      casinoTables: transformedCasinoTables,
    },
    {
      title: 'Afternoon Shift',
      times: gameTimeSlots,
      presenters: gamePresenters,
      casinoTables: transformedCasinoTables,
    },
    {
      title: 'Evening Shift',
      times: gameTimeSlots,
      presenters: gamePresenters,
      casinoTables: transformedCasinoTables,
    },
  ];

  useEffect(() => {
    setDate(new Date(new Date().setHours(shiftStartHour, 0, 0, 0)));
  }, [shiftStartHour]);

  useEffect(() => {
    const gameTimeSlotIntervals = splitTimeInterval(
      date,
      timeSlotInterval,
      'minutes',
      hours,
    );
    setGameTimeSlots(gameTimeSlotIntervals);
  }, [date, hours, timeSlotInterval]);

  useEffect(() => {
    const presenterCount = gamePresenters?.length;

    const allTables = [].concat(
      ...new Array(shiftLengthHours).fill(casinoTables),
    );

    [...Array(presenterCount)].map((n, i) => {
      console.log('index', i);
      setTransformedCasinoTables((state) => [allTables, ...state]);
    });
  }, [casinoTables, gamePresenters, hours, shiftLengthHours]);

  const renderTableTimes = (times = []) => {
    return (
      times &&
      times.map((time, index) => {
        if (!time) return;
        const toTime = addMinutes(time, timeSlotInterval);
        return (
          <TableCell key={index}>
            {time} - {toTime}
          </TableCell>
        );
      })
    );
  };

  const renderTableGames = (index: number) => {
    const casinoTablesRow = transformedCasinoTables[index];

    // THIS AIN'T WORKING OUT

    /*const tablesWithBreaks =
      casinoTablesRow &&
      insertIntoArrayNth(casinoTablesRow, shiftHours - index, {
        id: 0,
        name: 'Break',
      });*/
    const tableTimeSlots =
      casinoTablesRow &&
      ((index === 0 && casinoTablesRow) ||
        moveInArray(casinoTablesRow, index - 1, hours));

    return (
      tableTimeSlots &&
      tableTimeSlots.map((game: ICasinoTables, index: number) => {
        return <TableCell key={index}>{game.name}</TableCell>;
      })
    );
  };

  const renderTable = () => {
    return (
      gameTimeSlots &&
      transformedCasinoTables &&
      data &&
      data.map((d, index) => {
        const times = d.times && d.times[index];
        const tableGames = d.casinoTables && d.casinoTables[index];
        console.log('tableGames', index, tableGames);
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
                {d.presenters.map((row, index) => {
                  return (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      {renderTableGames(index)}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      })
    );
  };

  return <>{renderTable()}</>;
};
