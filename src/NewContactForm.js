// NewContactForm.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NewContactForm.css';

const NewContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    // Validar que se haya ingresado el nombre y el número de teléfono
    if (!formData.name || !formData.phone) {
      alert('Please enter both name and phone number before saving the contact.');
      return;
    }

    addContact(formData);

    // Después de agregar el contacto, navega a la lista de contactos
    navigate('/');
  };

  return (
    <div className="new-contact-form">
      <div className="form-container">
        <h2>Add Contact</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {/* Agrega aquí más campos según tus necesidades */}
      </div>

      {/* Botón "Save and Return" */}
      <button onClick={handleAddContact} className="save-and-return-button">
        Save and Return
      </button>

      {/* Enlace para ir a la lista de contactos */}
      <Link to="/" className="back-link">
        Back to Contact List
      </Link>
    </div>
  );
};

export default NewContactForm;
