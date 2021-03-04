import React from "react";
// import logo from "./logo.svg";
import Inputs from "./components/form/inputs/Intputs";
import ContactsList from "./components/list/contactsList/ContactsList";
import "./App.css";

function App() {
  // interface User {
  //   name: string;
  //   id: number;
  // }
  // const user: User = {
  //   name: "Hayes",
  //   id: 0,
  // };

  // useEffect(() => {
  //   setList(baseList);
  // }, []);

  // const baseList = [
  //   {
  //     name: "Bohdan",
  //     number: "0631032579",
  //   },
  // ];

  // const [list, setList] = useState(baseList);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Inputs />
        <ContactsList />
      </header>
    </div>
  );
}

export default App;
