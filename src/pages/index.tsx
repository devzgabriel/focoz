import { Box, Divider, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Countdown } from '../components/Countdown';
import { Subtitle } from '../components/Subtitle';
import { TaskList } from '../components/TaskList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Focoz</title>
        <meta name='description' content='lets focus' />
      </Head>

      <main>
        <Box py={8}>
          <Typography variant='h1' align='center'>
            Focoz
          </Typography>
        </Box>
        <Grid container height='70vh'>
          <Grid
            item
            xs
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Subtitle>Clock</Subtitle>
            <Box pt={4} maxWidth={400} width='100%'>
              <Countdown />
            </Box>
          </Grid>

          <Divider
            orientation='vertical'
            flexItem
            light
            sx={{ border: '1px solid #666' }}
          />

          <Grid
            item
            xs
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Subtitle>Tasks</Subtitle>
            <Box pt={4} maxWidth={400} width='100%'>
              <TaskList />
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;
