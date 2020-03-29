import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { 
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside component constructor', props)
  }

  componentWillMount() {
    console.log('[Persons.js] Inside component willMount')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside component didMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Persons.js] Inside component willReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] Inside component shouldComponentUpdate', nextProps, nextState);
  //   return this.props.persons !== nextProps.persons ||
  //           this.props.changed !== nextProps.changed ||
  //           this.props.clicked !== nextProps.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Persons.js] Inside component componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[Persons.js] Inside component componentDidUpdate', nextProps, nextState)
  }

  render() {
    console.log('[Persons.js] Inside component Render')

    return (
      this.props.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={person.id}
            position = {index}
            delete={() => this.props.clicked(index)}
            handler={event => this.props.changed(event, person.id)}
          ></Person>
        );
      })
    )
  }

}
export default Persons;