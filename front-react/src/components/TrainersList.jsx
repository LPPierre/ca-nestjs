import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [url, setUrl] = useState('localhost:3001/trainers');

  useEffect(()=>{
    axios.get(url).then(({data: {id, firstName, lastName}})=>{
      setTrainers({id: id, firstName: firstName, lastName: lastName})
    })
  }, [url])

  return (
    <div>
      <h3>Trainers</h3>
      <ul>
        {trainers.map(trainer => (
          <div>
            <li key={trainer.id}>{trainer.firstName}&nbsp;{trainer.lastName}</li>
            <button>Show boxes</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
