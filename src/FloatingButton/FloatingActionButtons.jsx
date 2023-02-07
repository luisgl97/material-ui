import { Box, Fab }from '@mui/material';
import { Add, Edit, Favorite, Navigation } from '@mui/icons-material';

export const FloatingActionButtons = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" size="small">
        <Add />
      </Fab>
      <Fab color="secondary" aria-label="edit" size="medium">
        <Edit />
      </Fab>
      <Fab variant="extended">
        <Navigation sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab aria-label="like">
        <Favorite color='error'/>
      </Fab>
      <Fab disabled aria-label="like">
        <Favorite />
      </Fab>
    </Box>
  );
}