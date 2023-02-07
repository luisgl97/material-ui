import { Delete, Send, Alarm, AddShoppingCart } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';

export const ButtonsDeleteSend = () => {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button color="error" variant="outlined" startIcon={<Delete />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<Send />}>
                    Send
                </Button>
            </Stack><Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <Delete />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <Alarm fontSize="medium"/>
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart" size='large'>
                    <AddShoppingCart fontSize='large'/>
                </IconButton>
            </Stack>
        </>


    );
}