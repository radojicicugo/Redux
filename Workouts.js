import React, {useState} from 'react';
import Activity from './Activity';
import { useSelector } from 'react-redux';
import AddActivity from './AddActivity';

function Workouts(props) {
  
    const allActivities = useSelector((state) => state.activities)
    
    const [add, setAdd] = useState()

    return (
        <div className={"workouts-wrapper"}>
         <h1>My Workouts</h1>
         <button onClick={() => setAdd(!add)}>Add Activity</button>
         {add && <AddActivity /> }
         {allActivities.map(activity => {
             return  <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration} />
         })}
        </div>
    );
}

export default Workouts;