import React, {Component} from 'react';
import styles from './Person.module.css';

class person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside component constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside component willMount')
  }

  componentDidMount() {
    console.log('[Person.js] Inside component didMount')
  }

  render () {
    console.log('[Person.js] Inside component Render')

    return (
      <div className={styles.Person}>
        <p onClick={this.props.delete}>
          I'm {this.props.name} ! and I'm {this.props.age} years old, {this.props.children}
        </p>
        <input type="text" onChange={this.props.handler} value={this.props.name}/>
      </div>
    );
  }
}

export default person;
