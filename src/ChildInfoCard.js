import React from 'react';
import './ChildInfoCard.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function ChildInfoCard({id, name, sex, dob, fname, mname, state, district, picurl}) {
    return (
        <div className="childinfocard">
            <div className='childinfocard__container'>
            <Link to='/child'><ArrowBackIcon id='back-btn'/></Link>
                <div className='childinfocard__pic'>
                    <img src={picurl} alt=''/>
                </div>
                <div className='childinfocard__info'>
                    <div>
                        <span className='info__title'>Name:</span>
                        <span>{name}</span>
                    </div>
                    <div>
                        <span className='info__title'>Sex:</span>
                        <span>{sex}</span>
                    </div>
                    <div>
                        <span className='info__title'>Date of Birth:</span>
                        <span>{dob}</span>
                    </div>
                    <div>
                        <span className='info__title'>Father's Name:</span>
                        <span>{fname}</span>
                    </div>
                    <div>
                        <span className='info__title'>Mother's Name:</span>
                        <span>{mname}</span>
                    </div>
                    <div>
                        <span className='info__title'>State:</span>
                        <span>{state}</span>
                    </div>
                    <div>
                        <span className='info__title'>District:</span>
                        <span>{district}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChildInfoCard;
