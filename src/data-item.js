import React from 'react';

const DataItem = ({data, onEdit, onDelete}) => (
  <table>
    <thead>
      <tr>
      <th>Id</th>
        <th>Name</th>
        <th>contact</th>
        <th>address</th>
      </tr>
    </thead>
    <tbody>
      {(
        data.map(user => (
          <tr key={user.name}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.contact}</td>
            <td>{user.address}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user)}>Delete</button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>        
);


export default DataItem;