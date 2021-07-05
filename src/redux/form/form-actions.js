import { createAction } from "@reduxjs/toolkit";
import { v4 as uid } from "uuid";

const addContact = createAction("form/addContact", ({ name, number }) => {
  return {
    payload: {
      id: uid(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("form/deleteContact");

const filterContacts = createAction("form/filterContacts");

export default { addContact, deleteContact, filterContacts };
