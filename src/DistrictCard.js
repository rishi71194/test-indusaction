import React from 'react';
import './DistrictCard.css';

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
            <div className="state__arr">
                -
            </div>
        </div>
    )
}

export default DistrictCard;
