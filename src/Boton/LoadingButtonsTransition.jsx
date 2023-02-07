import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Save, Send } from '@mui/icons-material';

export const LoadingButtonsTransition = () => {
    const [loading, setLoading] = useState(true);
    function handleClick() {
        setLoading(true);
    }

    return (
        <Box>
            <FormControlLabel
                sx={{
                    display: 'block',
                }}
                control={
                    <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="loading"
                        color="primary"
                    />
                }
                label="Loading"
            />
            <Box sx={{ '& > button': { m: 1 } }}>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    loading={loading}
                    variant="outlined"
                    disabled
                >
                    <span>disabled</span>
                </LoadingButton>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Loading…"
                    color="error"
                    variant="outlined"
                >
                    <span>Fetch data</span>
                </LoadingButton>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    endIcon={<Send />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    
                >
                    <span>Send</span>
                </LoadingButton>
                <LoadingButton
                    size="small"
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<Save />}
                    variant="contained"
                >
                    <span>Save</span>
                </LoadingButton>
            </Box>

            <Box sx={{ '& > button': { m: 1 } }}>
                <LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    variant="outlined"
                    disabled
                >
                    <span>disabled</span>
                </LoadingButton>
                <LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Loading…"
                    variant="outlined"
                >
                    <span>Fetch data</span>
                </LoadingButton>
                <LoadingButton
                    onClick={handleClick}
                    endIcon={<Send />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    <span>Send</span>
                </LoadingButton>
                <LoadingButton
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<Save />}
                    variant="contained"
                >
                    <span>Save</span>
                </LoadingButton>
            </Box>
        </Box>
    );
}