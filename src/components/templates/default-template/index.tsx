import Container from '@mui/material/Container';
import { FunctionComponent } from 'react';

import { DefaultAppBar } from '~components/templates/default-template/app-bar';

export const DefaultTemplate: FunctionComponent = ({ children }) => {
  return (
    <>
      <DefaultAppBar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};
