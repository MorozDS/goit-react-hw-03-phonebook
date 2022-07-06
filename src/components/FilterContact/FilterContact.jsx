import React, { Component } from 'react';
import s from './FilterContact.module.css';
import PropTypes from 'prop-types';

export default class FilterContact extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    const { filter, onChange } = this.props;
    return (
      <>
        <p className={s.filterheader}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={onChange}
          value={filter}
          className={s.input}
        />
      </>
    );
  }
}
