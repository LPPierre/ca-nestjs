import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoxesList from './BoxesList';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [apiUrl, setApiUrl] = useState('http://localhost:3001/trainers');
  // TODO Handle form validation messages
  const [addTrainerErrors, setAddTrainerErrors] = useState(undefined);
  const [boxesListData] = useState(undefined);

  const initTrainer = {firstName: '', lastName: ''};
  const apiConfig = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3001'}
  const [newTrainer, setNewTrainer] = useState(initTrainer);

  const handleChange = event => {
      setNewTrainer({...newTrainer, [event.target.name]: event.target.value})
  };

  const handleSubmit = event => {
      event.preventDefault();
      axios.post(apiUrl, newTrainer, apiConfig).then(response => {
        setTrainers(trainers => [...trainers, newTrainer])
        setNewTrainer(initTrainer)
      }).catch(error => {
        console.log(error)
        // TODO Handle form validation messages
        // setAddTrainerErrors(error)
      });
  };

  useEffect(()=>{
    axios.get(apiUrl, apiConfig).then(response => {
      response.data.forEach(trainer => {
        setTrainers(trainers => [...trainers, trainer])
      });
    });
  }, [apiUrl])

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
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Boites</th>
          </tr>
        </thead>
        <tbody>
        {trainers.map(trainer => (
          <tr key={trainer.id}>
            <td>{trainer.firstName}&nbsp;{trainer.lastName}</td>
            <td>
              <button>Afficher ({trainer.boxes.length})</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainersList;
