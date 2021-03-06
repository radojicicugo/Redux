import React from 'react';
import {useDispatch} from 'react-redux';


function Activity(props) {

   const dispatch = useDispatch();

   const deleteActivity = () => {
       dispatch({
           type: 'DELETE_ACTIVITY',
           payload: {
               id: props.id
           }
       })
   }

    return (
        <div className={'activity-wraper'} >
            <p>Activity: {props.name}, Duration: {props.duration} </p>
            <button onClick={deleteActivity}>Delete</button>
        </div>
    );
    
}

export default Activity;