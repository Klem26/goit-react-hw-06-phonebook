import actionTypes from "./form-types";
import { v4 as uid } from "uuid";

export const addContact = ({ name, number }) => ({
  type: actionTypes.addContact,
  payload: {
    id: uid(),
    name,
    number,
  },
});

export const deleteContact = (contactId) => ({
  type: actionTypes.deleteContact,
  payload: contactId,
});

export const filterContacts = (value) => ({
  type: actionTypes.filterContacts,
  payload: value,
});
