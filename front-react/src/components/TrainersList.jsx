import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/trainers');

  useEffect(()=>{
    axios.get(url, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3001'
    }).then(response => {
      response.data.forEach(trainer => {
        setTrainers(trainers => [...trainers, trainer])
      });
    });
  }, [url])

  return (
    <div className="TrainersList">
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
