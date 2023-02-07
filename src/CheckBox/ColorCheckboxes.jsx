import { useState } from 'react';
import { pink } from '@mui/material/colors';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder, BookmarkBorder, Bookmark } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ColorCheckboxes = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  console.log('isChecked ', isChecked);
  return (
    <div>
      <Checkbox 
        onChange={handleChange}
        checked={isChecked} 
        {...label} 
        defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' />
      <Checkbox
        {...label}
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
      />
    </div>
  );
}