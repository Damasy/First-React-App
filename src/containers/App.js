import React, { PureComponent } from "react";
import logo from "../logo.svg";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Hoc";
import WithClass from "../hoc/WithClass";

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside component constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] Inside component willMount')
  }

  componentDidMount() {
    console.log('[App.js] Inside component didMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] Inside component shouldComponentUpdate', nextProps, nextState);
  //   return this.state.persons !== nextProps.persons ||
  //           this.state.showPersons !== nextProps.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] Inside component componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[App.js] Inside component componentDidUpdate', nextProps, nextState)
  }

  state = {
    persons: [
      { id: "asddsa", name: "a.damasy", age: 27 },
      { id: "asdzxc", name: "Doc.damasy", age: 31 },
      { id: "asdqwe", name: "Mah.damasy", age: 30 }
    ],
    showPersons: false,
    toggleClicked: 0
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
    this.setState((prevState, props) => { 
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {

    console.log('[App.js] Inside component Render')
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
      <Aux>
        <header className={styles["App-header"]}>
          <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
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
      </Aux>
    );
  }
}

export default WithClass(App, styles.App);
