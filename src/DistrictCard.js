import React from 'react';
import './DistrictCard.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DistrictCard({id, name, state}) {
    return (
        <div className="districtcard">
            <div className="district__id">
                <p>{id}</p>
            </div>
            <div className="district__info">
                <p>{name}</p>
                <p>{state}</p>
            </div>
            <div className="district__arr">
                <ArrowBackIcon/>
            </div>
        </div>
    )
}

export default DistrictCard;
