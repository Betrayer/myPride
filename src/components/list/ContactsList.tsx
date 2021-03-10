import React from "react";

const ContactsList = () => {
  const contactsList = JSON.parse(localStorage.getItem("contacts") || "[]");

  return (
    <>
      <ul>
        {contactsList.map((contact: any) => (
          <span key={contact.number}>
            {contact.name}, {contact.number}
          </span>
        ))}
        <li></li>
      </ul>
    </>
  );
};

export default ContactsList;
