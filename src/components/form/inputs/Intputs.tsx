import React, { useState } from "react";
import css from "./inputs.module.css";

const Intputs = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactsList = JSON.parse(localStorage.getItem("contacts") || "[]");

  interface User {
    name: string;
    number: number;
  }

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const getName = formData.get("user_name");
    const getNumber = Number(formData.get("user_number"));
    const user: User = {
      name: `${getName}`,
      number: getNumber,
    };
    if (!Number.isNaN(getNumber)) {
      // const contactsList = JSON.parse(localStorage.getItem("contacts") || "[]");
      contactsList.push(user);
      localStorage.setItem("contacts", JSON.stringify(contactsList));
    }
  };

  return (
    <section className={css.formSection}>
      <form
        action="/my_contacts"
        method="post"
        className={css.addingForm}
        onSubmit={handleForm}
      >
        <p className={css.contactsHeader}>Contacts</p>
        <ul className={css.formItemsList}>
          <li>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder="Ex.: John Doe"
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="number">Phone number:</label>
            <input
              id="number"
              name="user_number"
              type="tel"
              placeholder="Ex.: 8800553535"
              value={number ? number : ""}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit">Add contact</button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Intputs;
