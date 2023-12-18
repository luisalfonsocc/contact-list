// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './ContactList';
import NewContactForm from './NewContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ContactList contacts={contacts} />}
        />
        <Route
          path="/new-contact"
          element={<NewContactForm addContact={addContact} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
