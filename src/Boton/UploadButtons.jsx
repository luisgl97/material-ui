import { useState, useEffect } from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export const UploadButtons = () => {
    const [image, setImage] = useState(null);

    const handleChange = ({target}) =>{
        setImage(target.files[0]);
    }
    console.log(image)

    useEffect(() => {
        return () => {
          URL.revokeObjectURL(image);
        };
      }, [image]);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" onChange={handleChange}/>
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" onChange={handleChange}/>
        <PhotoCamera />
      </IconButton>
      {image && <img src={URL.createObjectURL(image)} alt="preview" style={{ width: "200px", height: "200px"}} />}
    </Stack>
  );
}