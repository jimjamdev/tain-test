import { NextPage } from 'next';

import { DefaultTemplate } from '~components/templates/default-template';
import { AuthContainer } from '~containers/auth-container';

const LoginPage: NextPage = () => {
  return (
    <DefaultTemplate>
      <AuthContainer />
    </DefaultTemplate>
  );
};

export default LoginPage;
