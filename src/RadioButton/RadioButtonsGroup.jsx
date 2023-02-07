import { useState } from "react"
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

export const RadioButtonsGroup = () => {
    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    console.log(value)
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
            <RadioGroup
                value={value}
                onChange={handleChange}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                />
            </RadioGroup>
        </FormControl>
    );
}