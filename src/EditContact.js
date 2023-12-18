// EditContact.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditContact = ({ contacts, index }) => {
  const [formData, setFormData] = useState(contacts[index]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Actualizar el contacto
    // ...

    // Navegar de vuelta a la lista de contactos
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      <label>Email:</label>
      <input type="text" name="email" value={formData.email} onChange={handleChange} required />
      {/* Agrega aquí más campos según tus necesidades */}
      
      {/* Botón "Save" */}
      <button onClick={handleSave} className="save-and-return-button">
        Save
      </button>
    </div>
  );
};

export default EditContact;
