import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import { v4 as uid } from "uuid";
import contacts from "./components/ContactList/contacts.json";

class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      alert(
        `${name} is already in contacts. Want to replace an existing contact ?`
      );
      return;
    }
    const id = uid();
    this.setState({
      contacts: [{ name, number, id }, ...contacts],
      filter: "",
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={contacts}
          onDeleteContacts={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
