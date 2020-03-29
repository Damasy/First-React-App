import React from 'react';
import Styles from './Cockpit.module.css';
import WithClasses from '../../hoc/WithClasses';


const Cockpit = (props) => {

  let activeClass = "";
  
  if(props.showPersons) {
    activeClass = Styles.blue;
  }
  
  return (
    <WithClasses classes={Styles.Cockpit}>
      <button className={activeClass} onClick={props.handler}>
        Toggle Persons
      </button>
    </WithClasses>
  );
}


export default Cockpit;