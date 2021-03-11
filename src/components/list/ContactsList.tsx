import React from "react";
import css from "./contactList.module.css";

const ContactsList = () => {
  // Could've used "contactsList" from App component as a prop, but didn't - I may try later
  const contactsList: Array<object> = JSON.parse(
    localStorage.getItem("contacts") || "[]"
  );

  return (
    <ul className={css.myContacts}>
      {contactsList.map((contact: any) => (
        <span key={contact.number}>
          {contact.name}, {contact.number}
        </span>
      ))}
      <li></li>
    </ul>
  );
};

export default ContactsList;
