import React, { useState } from 'react';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  // const [url, setUrl] = useState('localhost:3001/trainers');

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
