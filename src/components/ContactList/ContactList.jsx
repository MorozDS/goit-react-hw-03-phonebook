import React, { Component } from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, handleClick } = this.props;
    return (
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => handleClick(contact.id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
