import React, {Component} from 'react';
import PropTypes, { number, string } from 'prop-types';
import styles from './Person.module.css';
import Aux from '../../../hoc/Hoc';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside component constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside component willMount')
  }

  componentDidMount() {
    console.log('[Person.js] Inside component didMount');
    if(this.props.position === 0) this.inputElement.focus();
  }

  render () {
    console.log('[Person.js] Inside component Render')

    return (
      <Aux>
        <p onClick={this.props.delete}>
          I'm {this.props.name} ! and I'm {this.props.age} years old, {this.props.children}
        </p>
        <input 
        ref = {(inp) => {this.inputElement = inp}}
        type="text" 
        onChange={this.props.handler} 
        value={this.props.name}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  handler: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  delete: PropTypes.func
}

export default WithClass(Person, styles.Person);
