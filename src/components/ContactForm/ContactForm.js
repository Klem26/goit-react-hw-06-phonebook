import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import * as formActions from "../../redux/form/form-actions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handelSubmit}>
        <label className={styles.labelForm}>
          Name{" "}
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.labelForm}>
          Number{" "}
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.btnAddContact} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (value) => dispatch(formActions.addContact(value)),
  };
};

console.log(mapDispatchToProps());
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);