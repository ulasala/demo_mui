import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants(props) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-standard-label">
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option}
          onChange={handleChange}
          label={props.label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Option A</MenuItem>
          <MenuItem value={20}>Option B</MenuItem>
          <MenuItem value={30}>Option C</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
