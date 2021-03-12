import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import ContactsList from "./components/list/ContactsList";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  // State management
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [alert, setAlert] = useState(false);

  // Alert listener for modal window
  useEffect(() => {
    setTimeout(() => setAlert(false), 2000);
  }, [alert]);

  // Variable where data is stored
  const contactsList: Array<object> = JSON.parse(
    localStorage.getItem("contacts") || "[]"
  );

  // My custom iterface for new contact
  interface User {
    name: string | number;
    number: number;
    birthday?: FormDataEntryValue | null; // ! IMPORTANT (now it's disabled)
  }

  // Form handler - we're getting data from input and storing it in local storage using User interface
  const handleForm = (e: React.FormEvent): void => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const getName = formData.get("user_name");
    const getNumber = Number(formData.get("user_number"));
    const getBirthday = formData.get("user_birthday");
    const user: User = {
      name: `${getName}`,
      number: getNumber,
      birthday: getBirthday,
    };
    // -------------
    // Here's another way to create "user" w/o interface, but it seems to be less understandale, so i'll stick to first option
    // const user: { name: string | number; number: number; birthday?: number } = {
    //   name: `${getName}`,
    //   number: getNumber,
    // birthday: getBirthday,
    // };
    // -------------
    if (!Number.isNaN(getNumber)) {
      contactsList.push(user);
      localStorage.setItem("contacts", JSON.stringify(contactsList));
      setName("");
      setNumber("");
      setBirthday("");
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="App">
      {alert ? <Modal /> : <></>}
      {/* <header className="App-header"></header> */}

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
              <label htmlFor="date">Birthday:</label>
              <input
                id="birthDate"
                name="user_birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
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
