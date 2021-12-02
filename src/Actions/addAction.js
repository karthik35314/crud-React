import {CREATE_POST,EDIT_POST,DELETE_POST} from "./actionTypes"



export const addUser = (data) => ({
    
    type: CREATE_POST,
    payload:data,
});

export const EditUser = (data) =>{
    debugger
    return ({
 
    type: EDIT_POST,
    payload:data,
    
});
}


export const deleteUser = (data) => ({
    
    type: DELETE_POST,
    payload:data,
    
});