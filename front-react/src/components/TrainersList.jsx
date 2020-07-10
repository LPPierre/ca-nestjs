import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoxesList from './BoxesList';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/trainers');
  // TODO Handle form validation messages
  const [addTrainerErrors, setAddTrainerErrors] = useState(undefined);
  const [boxesListData] = useState(undefined);

  const [newTrainer, setNewTrainer] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = event => {
      setNewTrainer({...newTrainer, [event.target.name]: event.target.value})
  };

  const handleSubmit = event => {
      event.preventDefault();
      axios.post(url, newTrainer, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3001',
      }).then(response => {
        setTrainers(trainers => [...trainers, newTrainer])
      }).catch(error => {
        // TODO Handle form validation messages
        // setAddTrainerErrors(error)
      });
  };

  useEffect(()=>{
    axios.get(url, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3001',
    }).then(response => {
      response.data.forEach(trainer => {
        setTrainers(trainers => [...trainers, trainer])
      });
    });
  }, [url])

  return (
    <div className="TrainersList">
      <h3>Dresseurs</h3>
      <div className="AddTrainerForm">
        <h5>Ajouter un dresseur</h5>
        <form onSubmit={handleSubmit}>
          <label>
            Prénom:
            <input type="text" name="firstName" onChange={handleChange} value={newTrainer.firstName}/>
          </label>
          <label>
            Nom:
            <input type="text" name="lastName" onChange={handleChange} value={newTrainer.lastName}/>
          </label>
          <input type="submit" value="Ajouter"/>
        </form>
      </div>
      <ul>
        {trainers.map(trainer => (
          <div>
            <li key={trainer.id}>{trainer.firstName}&nbsp;{trainer.lastName}</li>
            <button>Afficher les boites</button>
            {/* {trainers.boxes.length} boxes. */}
            {boxesListData !== undefined ? <BoxesList trainer={trainer.id}/> : ''}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
