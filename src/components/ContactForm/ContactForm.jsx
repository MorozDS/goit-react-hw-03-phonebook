import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit({ ...this.state });
    this.resetForm();
  };

  render() {
    return (
      <form autoComplete="on" onSubmit={this.handleSubmit} className={s.form}>
        <div>
          <label htmlFor={this.nameInputId} className={s.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            value={this.state.name}
            id={this.nameInputId}
            placeholder=" Your Name"
            className={s.input}
          />
        </div>
        <div>
          <label htmlFor={this.numberInputId} className={s.label}>
            Phone
          </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
            value={this.state.number}
            id={this.numberInputId}
            placeholder=""
            className={s.input}
          />
        </div>

        <button type="submit" name="submit_button" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
