import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContact from './FilterContact/FilterContact';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in Contacts List!`);
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  renderContactList = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  onChange = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 20,
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <FilterContact filter={this.state.filter} onChange={this.onChange} />

        <ContactList
          contacts={this.renderContactList()}
          handleClick={this.deleteContact}
        />
      </div>
    );
  }
}
