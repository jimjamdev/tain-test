import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { useEffect } from 'react';

import { AdminList } from '~components/admin-list';
import { CreateGameTableForm } from '~components/forms/create-game-table-form';
import { DefaultTemplate } from '~components/templates/default-template';
import {
  createGame,
  removeGame,
  selectCasinoTables,
} from '~store/casino-tables/casino-tables.slice';
import { useAppDispatch, useAppSelector } from '~store/store';
import { ICasinoTables } from '~types/casino';

const AdminGameTablesPage: NextPage = () => {
  const router = useRouter();
  const [session] = useSession();
  const gameTables = useAppSelector(selectCasinoTables);
  const dispatch = useAppDispatch();

  /** There are better ways. But this for speed */

  useEffect(() => {
    if (!session) {
      router.push('/auth');
    }
  });

  return (
    <DefaultTemplate>
      <CreateGameTableForm
        onSubmit={(data: ICasinoTables) => dispatch(createGame(data))}
      />
      <AdminList
        // @ts-ignore
        data={gameTables}
        remove={(item: number) => dispatch(removeGame(item))}
      />
      ;
    </DefaultTemplate>
  );
};

export default AdminGameTablesPage;
