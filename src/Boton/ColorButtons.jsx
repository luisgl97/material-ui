
import {Button, Stack } from '@mui/material';

export const ColorButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary" size="small">Secondary</Button>
      <Button variant="contained" color="success" size="medium">
        Success
      </Button>
      <Button variant="outlined" color="error" size="large">
        Error
      </Button>
    </Stack>
  );
}