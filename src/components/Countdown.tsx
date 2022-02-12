import { Box, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

let countdownTimeOut: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    console.log(time);
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      alert('Time is up!');
    }
  }, [isActive, time]);

  return (
    <Box
      alignItems='center'
      display='flex'
      justifyContent='center'
      flexDirection='column'
    >
      <Box
        alignItems='center'
        display='flex'
        justifyContent='center'
        p={2}
        m={1}
        mb={2}
        width='100%'
        height='100%'
        sx={{
          border: '1px solid #666',
          borderRadius: '8px',
          '::before': {
            border: 'none',
          },
        }}
      >
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Box>

      <Grid container spacing={2}>
        <Grid item xs>
          <Button
            color='secondary'
            variant='outlined'
            fullWidth
            onClick={() => resetCountdown()}
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            color='secondary'
            variant='contained'
            fullWidth
            onClick={() => startCountdown()}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
