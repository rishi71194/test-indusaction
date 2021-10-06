import React from 'react';
import './StateCard.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function StateCard({id, state}) {
    return (
        <div className="statecard">
            <div className="state__id">
                <p>{id}</p>
            </div>
            <div className="state__name">
                {state}
            </div>
            <div className="state__arr">
                <ArrowBackIcon/>
            </div>
        </div>
    )
}

export default StateCard;
