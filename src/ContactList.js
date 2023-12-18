// ContactList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ContactList.css';

const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = (index) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this contact?');
    if (isConfirmed) {
      deleteContact(index);
    }
  };

  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/new-contact">
        <button className="add-contact-button">Add Contact</button>
      </Link>
      {contacts.map((contact, index) => (
        <div className="contact-container" key={index}>
          <p>Name: {contact.name}</p>
          <p>Address: {contact.address}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          {/* Agrega más detalles del contacto según tus necesidades */}
          
          {/* Botones de Eliminar y Editar */}
          <button onClick={() => handleDelete(index)}>Delete</button>
          <Link to={`/edit-contact/${index}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
