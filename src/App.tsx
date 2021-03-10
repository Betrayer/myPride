import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import ContactsList from "./components/list/ContactsList";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => setAlert(false), 2000);
  }, [alert]);

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
      contactsList.push(user);
      localStorage.setItem("contacts", JSON.stringify(contactsList));
      setName("");
      setNumber("");
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="App">
      {alert ? <Modal /> : <></>}
      <header className="App-header"></header>

      <section className="formSection">
        <form
          action="/my_contacts"
          method="post"
          className="addingForm"
          onSubmit={handleForm}
        >
          <p className="contactsHeader">Contacts</p>
          <ul className="formItemsList">
            <li>
              <label htmlFor="name">Name:</label>
              <input
                required
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
                required
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
      <ContactsList />
    </div>
  );
}

export default App;
