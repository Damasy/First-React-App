import React, { Component } from "react";
import logo from "../logo.svg";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "asddsa", name: "a.damasy", age: 27 },
      { id: "asdzxc", name: "Doc.damasy", age: 31 },
      { id: "asdqwe", name: "Mah.damasy", age: 30 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Doctor Damasy", age: 31 },
        { name: "Mahmoud Damasy", age: 30 }
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];

    persons.map(p => {
      if (p.id === id) p.name = event.target.value;
      return p;
    });

    this.setState({
      persons: persons
    });
  };

  showPersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        ></Persons>
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.bold);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles["react-color"]);
    }
    if(!this.state.persons.length) {
      classes = [];
    }

    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <p className={classes.join(" ")}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Cockpit
            showPersons={this.state.showPersons}
            handler={this.showPersonsHandler}
          ></Cockpit>
          
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
