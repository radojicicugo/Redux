import React, { useState }   from 'react';
import { useDispatch } from 'react-redux';




function AddActivity(props) {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        duration: ""
    })

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const addActivityFunc = () => [
       dispatch({
         type: 'CREATE_ACTIVITY',
         payload: {
             name: data.name,
             duration: data.duration
         }
       })
    ]

    return (
        <div className="add">
          <div className="input-section">
              <p>Activity:</p>
              <input name="name" placeholder="activity name...." onChange={(e) => handleChange(e)} />
          </div>
          <div className="input-section">
              <p>Duration:</p>
              <input name="duration" placeholder="activity duration...." onChange={(e) => handleChange(e)} />
          </div>
             <button onClick={addActivityFunc}>Add New Activity</button>   
        </div>
    );
}

export default AddActivity;