import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import DataItem from './data-item';
import Modal from './modal';
import {useDispatch} from 'react-redux';
import { EditUser } from './Actions/addAction';
const App = () => {
  const dispatch =useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(data);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    
  }

  // const addUser = user => {
 
  //   if (currentUser) {
  //     // setUserData(userData.map(data => (data.id === user.id ? user : data))); 
     
  //     setCurrentUser(null);
  //     return;
  //   }
   
  
  //   setUserData([...userData, user]);
  // }

  const editUserHandler = user => {
    setCurrentUser(user);
    toggleModal();
  }
 

console.log(userData)
  return (
    <div>
      <div className="header">
        <span className="title">Emp details </span>
        
      </div>
      <button onClick={toggleModal}>Add new</button>
      <DataItem data={userData} onEdit={editUserHandler}   />
      <Modal onCancel={toggleModal}  show={showModal} setCurrentUser={setCurrentUser} data={userData} editUser={currentUser} />
    </div>
  )
}

export default App;
