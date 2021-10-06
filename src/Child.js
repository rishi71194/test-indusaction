import React from 'react';
import AddChild from './AddChild';
import './Child.css';
import ChildInfoCard from './ChildInfoCard';
import { useStateValue } from './StateProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

function Child() {

    const [{children}, dispatch] = useStateValue();
     
    return (
        <div className='child'>
            <Link to='/child-add'>
                <Button variant="contained" id='add-child-btn'>ADD CHILD</Button>
            </Link>
            <div className='child__table'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>Name</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>Sex</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>Date of Birth</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>Father's Name</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>Mother's Name</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>State</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>District</TableCell>
                                <TableCell style={{fontSize:'16px', color: 'lightgrey'}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {children.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.sex}</TableCell>
                            <TableCell>{row.dob}</TableCell>
                            <TableCell>{row.father_name}</TableCell>
                            <TableCell>{row.mother_name}</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell><Link to='/child-info' style={{textDecoration: 'none'}}><Button variant="outlined" id='view-child-btn'>View</Button></Link></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Child;