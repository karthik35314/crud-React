import React, {useState, useEffect} from 'react';

const Modal = ({show, data, onSubmit, onCancel, editUser}) => {



  useEffect(() => {
    console.log(editUser);
    if (editUser) setFormData(editUser);
  }, [editUser]);

  const initialFormState = () => {
    return {id: null, name: '', contact: '',address:''};
  } 
  const [formData, setFormData] = useState(initialFormState);

  const onInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value});
  }

  const submitData = event => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState)
    onCancel();
  }

  const cancel = event => {
 
    setFormData(initialFormState)
    onCancel();
  }

  return (
    show ? (
    <div className="modal-overlay">
      <div className='modal'>
        <form onSubmit={submitData}>
          <h3>{editUser ? 'edit details' : 'new details'}</h3>
          <div className="modal-section">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} 
              onChange={onInputChange} autoFocus autoComplete="off" />
          </div>
          <div className="modal-section">
            <label>contact</label>
            <input type="text" name="contact" value={formData.contact} 
              onChange={onInputChange} autoComplete="off" />
          </div>
          <div className="modal-section">
            <label>address</label>
            <input type="text" name="address" value={formData.address} 
              onChange={onInputChange} autoComplete="off" />
          </div>
          
          <button type="button" onClick={cancel}>cancel</button>
          <button type="submit">submit</button>
        </form>
      </div>
    </div> 
    ) : null
  );
}

export default Modal;