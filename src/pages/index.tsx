import Button from '@mui/material/Button';
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
        <section className="max-w-7xl mx-auto px-4 py-4">
          <h1>Test</h1>
          <GameTablesContainer />
          <Button>Click</Button>
        </section>
      </DefaultTemplate>
    </>
  );
};

export default Home;
