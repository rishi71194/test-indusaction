import React, { useState } from 'react';
import './State.css';
import StateCard from './StateCard';
import { useStateValue } from './StateProvider';

function State() {

    const [{states}, dispatch ] = useStateValue();
    const [state, setState] = useState('');
    const [count, setCount] = useState(1);

    const addState = () => {

        dispatch({
            type: "ADD_STATE",
            payload: {
                id: count,
                name: state,
            },
        });
        setCount(count+1);
    };

    return (
        <div className='state'>
            <div className="state__add">
                <div className="add__button">
                   <p>+</p> 
                </div>
                <div className="state__form">
                    <input type='text' onChange={(event)=>setState(event.target.value)} placeholder="Enter State Name" />
                    <button type="submit" onClick={addState}>ADD STATE</button>
                </div>
            </div>
            {states.map(item=>(
                        <StateCard
                            id = {item.id}
                            state={item.name}
                        />               
            ))}
        </div>
    )
}

export default State;
