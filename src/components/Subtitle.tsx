import { Typography } from '@mui/material';

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant='h5' align='center'>
      {children}
    </Typography>
  );
}
