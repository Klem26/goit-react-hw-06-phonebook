import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
