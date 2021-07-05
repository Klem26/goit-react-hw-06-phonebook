import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import formActions from "../../redux/form/form-actions";

import ContactUser from "./ContactUser";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactUser
            key={id}
            name={name}
            number={number}
            onDeleteContacts={onDeleteContacts}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const filterUser = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: filterUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContacts: (id) => dispatch(formActions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
