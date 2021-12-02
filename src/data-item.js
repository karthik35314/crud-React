import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { deleteUser, } from './Actions/addAction';

const DataItem = ({onEdit}) =>{ 
const dispatch = useDispatch()




  const onDelete = user => {
    
       dispatch(deleteUser(user))
  }
  
  const posts = useSelector((state) => state.allposts.posts);
  console.log(posts)
  return(
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
        posts.map(user => (
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
        }

export default DataItem;