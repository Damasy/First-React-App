import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'asddsa', name: "a.damasy", age: 27 },
      { id: 'asdzxc', name: "Doc.damasy", age: 31 },
      { id: 'asdqwe', name: "Mah.damasy", age: 30 }
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
      if(p.id === id) p.name = event.target.value;
      return p;
    })
    
    this.setState({
      persons: persons});
  };

  showPersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
		this.setState({persons: persons});
	};

  render() {
    const style = {
      backgroundColor: "#61DAFB",
      font: "16px",
      color: "#00f",
      border: "none",
      boxShadow: "0 0 2px rgba(0,0,0, 0.4)",
      height: "40px",
      cursor: "pointer",
      margin: "10px auto",
      padding: "10px",
      borderRadius: "4px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person
										name={person.name}
										age={person.age}
										key={person.id}
										delete={() => this.deletePersonHandler(index)}
										handler={(event) => this.nameChangeHandler(event, person.id)}
									>
									</Person>
            })}
        </div>
      );

      style.backgroundColor = '#ff0';
    }

    let classes = [];
    if(this.state.persons <= 2) {
      classes.push('bold');
    }
    if(this.state.persons <= 1) {
      classes.push('react-color')
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={classes.join(' ')}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button style={style} onClick={this.showPersonsHandler}>
            Toggle Persons
          </button>

          {persons}
        </header>
      </div>
    );
  }
}

export default App;
