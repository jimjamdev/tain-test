import { selectPresenters } from '~store/game-presenters/game-presenters.slice';
import { useAppSelector } from '~store/store';

export const GamePresentersContainer = () => {
  const gamePresenters = useAppSelector(selectPresenters) || [];
  console.log(gamePresenters);

  const renderCasinoTables = () => {
    return gamePresenters.map((table) => {
      return <li key={table.name}>{table.name}</li>;
    });
  };

  return <ul>{renderCasinoTables()}</ul>;
};
