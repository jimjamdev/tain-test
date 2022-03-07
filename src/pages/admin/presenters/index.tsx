import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { AdminList } from '~components/admin-list';
import { CreatePresenterForm } from '~components/forms/create-presenter-form';
import { DefaultTemplate } from '~components/templates/default-template';
import {
  createPresenter,
  removePresenter,
  selectPresenters,
} from '~store/game-presenters/game-presenters.slice';
import { useAppDispatch, useAppSelector } from '~store/store';
import { IGamePresenter } from '~types/casino';

const AdminPresentersPage: NextPage = () => {
  const router = useRouter();
  const [session] = useSession();
  const gamePresenters = useAppSelector(selectPresenters);
  const dispatch = useAppDispatch();

  /** There are better ways. But this for speed */
  if (!session) {
    router.push('/auth');
  }

  return (
    <DefaultTemplate>
      <CreatePresenterForm
        onSubmit={(data: IGamePresenter) => dispatch(createPresenter(data))}
      />
      <AdminList
        // @ts-ignore
        data={gamePresenters}
        remove={(item: number) => dispatch(removePresenter(item))}
      />
      ;
    </DefaultTemplate>
  );
};

export default AdminPresentersPage;
