import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import DataItem from './data-item';
import Modal from './modal';

const App = () => {
 
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(data);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addUser = user => {
 
    if (currentUser) {
      setUserData(userData.map(data => (data.id === user.id ? user : data)));
      setCurrentUser(null);
      return;
    }
    userData.map(data => (data.id === user.id ? alert("already exits") : 
    user.id = userData.length + 1
    ))
    setUserData([...userData, user]);
  }

  const editUserHandler = user => {
    setCurrentUser(user);
    toggleModal();
  }

  const deleteUser = user => {
    setUserData(userData.filter(item => item.name !== user.name));
  }

  return (
    <div>
      <div className="header">
        <span className="title">Emp details </span>
        
      </div>
      <button onClick={toggleModal}>Add new</button>
      <DataItem data={userData} onEdit={editUserHandler} onDelete={deleteUser} />
      <Modal onCancel={toggleModal} onSubmit={addUser} show={showModal} data={userData} editUser={currentUser} />
    </div>
  )
}

export default App;
