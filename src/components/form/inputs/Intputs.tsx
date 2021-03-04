import React, { useState } from "react";
import css from "./inputs.module.css";

const Intputs = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //   const [user, setUser] = useState({
  //     name: "",
  //     number: "",
  //   });

  const wtf = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const a = formData.get("user_name");
    console.log("a :>> ", a);
  };

  return (
    <section className={css.formSection}>w
      <form action="/my_contacts" method="post" className={css.addingForm} onSubmit={wtf}>
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

// import React, { Component } from "react";
// import css from "./inputs.module.css";

// class Intputs extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (e: any) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e: any) => {
//       e.preventDefault();
//       if(!Number.isNaN(this.state.number){

//       }
//   }

//   render() {
//     return (
//       <section className={css.formSection}>
//         <form action="URL" method="post" className={css.addingForm}>
//           <p className={css.contactsHeader}>Contacts</p>
//           <ul className={css.formItemsList}>
//             <li>
//               <label htmlFor="name">Name:</label>
//               <input
//                 id="user_name"
//                 name="name"
//                 type="text"
//                 placeholder="Ex.: John Doe"
//                 onChange={this.handleChange}
//                 value={this.state.name}
//               ></input>
//             </li>
//             <li>
//               <label htmlFor="number">Phone number:</label>
//               <input
//                 id="user_number"
//                 name="number"
//                 type="tel"
//                 placeholder="Ex.: 8800553535"
//                 onChange={this.handleChange}
//                 value={this.state.number}
//               ></input>
//             </li>
//             <li>
//               <button type="submit">Add contact</button>
//             </li>
//           </ul>
//         </form>
//       </section>
//     );
//   }
// }

export default Intputs;
