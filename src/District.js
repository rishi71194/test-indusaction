import React, { useState } from 'react';
import './District.css';
import DistrictCard from './DistrictCard';
import { useStateValue } from './StateProvider';

function District() {

    const [district, setDistrict]=useState('');
    const [state, setState] = useState('');
    const [{districts, states}, dispatch ] = useStateValue();
    const [count, setCount] = useState(1);

    const addDistrict = () => {
        dispatch({
            type: "ADD_DISTRICT",
            payload: {
                id: count,
                name: district,
                stateName: state,
            },
        });
        setCount(count+1);
        console.log(districts);
    };

    return (
        <div className="district">
            <div className="district__add">
                <div className="add__button">
                   <p>+</p> 
                </div>
                <div className="district__form">
                    <select name="states" id="states" onSelect={(e)=>setState(e.target.value)}> 
                    {states.map(item=>(
                        <option value={item.id}>{item.name}</option>              
                    ))}
                    </select>
                    <input type='text' onChange={(event)=>setDistrict(event.target.value)} placeholder="Enter District Name" />
                    <button type="submit" onClick={addDistrict}>ADD DISTRICT</button>
                </div>
            </div>
            {districts.map(item=>(
                    <DistrictCard 
                        id = {item.id}
                        name={item.name}
                        state={item.stateName}
                    />              
            ))}
        </div>
    )
}

export default District;
