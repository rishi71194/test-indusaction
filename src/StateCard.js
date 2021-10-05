import React from 'react';
import './StateCard.css';


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
                -
            </div>
        </div>
    )
}

export default StateCard;
