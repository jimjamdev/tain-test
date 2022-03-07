import { Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

import { DefaultTemplate } from '~components/templates/default-template';
import { GameTablesContainer } from '~containers/game-tables-container';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="SEO Meta stuff" />
      </Head>
      <DefaultTemplate>
        <Typography variant="h3" component="h1" gutterBottom>
          Test
        </Typography>
        <GameTablesContainer />
      </DefaultTemplate>
    </>
  );
};

export default Home;
