import React, { useState } from 'react';
import './AddChild.css';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useStateValue } from './StateProvider';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function AddChild() {

    const [sex, setSex] = React.useState('');
    const [state, setState] = React.useState('');
    const [district, setDistrict] = React.useState('');

    const [{states, districts}, dispatch] = useStateValue();

    const [child, setChild] = useState([]);


    const handleChangeSex = (event) => {
      setSex(event.target.value);
    };

    const handleChangeState = (event) => {
        setState(event.target.value);
      };

    const handleChangeDistrict = (event) => {
       setDistrict(event.target.value);
    };


    return (
        <div className='addchild'>
            <div className='addchild__container'>
                <div className='addchild__header'>
                    <Link to='/child'>
                        <div><ArrowBackIcon id='back-btn'/></div>
                    </Link>
                    <h2>ADD CHILD</h2>
                </div>
                
                <div className='addchild__form'>
                    <TextField id="standard-basic" label="Name" variant="standard" />
                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">Sex</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={sex}
                        onChange={handleChangeSex}
                        label="Sex"
                        >
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="standard-basic" label="Date of Birth" variant="standard" />
                    <TextField id="standard-basic" label="Father's Name" variant="standard" />
                    <TextField id="standard-basic" label="Mother's Name" variant="standard" />
                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={state}
                        onChange={handleChangeState}
                        label="State"
                        >
                        {states.map((item)=>{
                            return (<MenuItem value={item.state_id}>{item.state_name}</MenuItem>)
                        })}
                        </Select>
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">District</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={district}
                        onChange={handleChangeDistrict}
                        label="District"
                        style={{marginBottom:'60px'}}
                        >
                        {districts.map((item)=>{
                            return (<MenuItem value={item.id}>{item.name}</MenuItem>)
                        })}
                        </Select>
                    </FormControl>
                    <Button variant="outlined" id='upload'>Take a photo / Upload</Button>
                    <Button variant="contained" id='submit'>SUBMIT</Button>
                </div>
            </div>
            
        </div>
    )
}

export default AddChild;
