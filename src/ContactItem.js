// ContactItem.js
import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <div>
      <img src={contact.photo} alt={contact.name} />
      <div>
        <p>Name: {contact.name}</p>
        <p>Address: {contact.address}</p>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        {/* Agrega aquí los iconos para editar y eliminar */}
      </div>
    </div>
  );
};

export default ContactItem;
