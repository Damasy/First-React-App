import React from 'react';
import Styles from './Cockpit.module.css';


const Cockpit = (props) => {

  let activeClass = "";
  
  if(props.showPersons) {
    activeClass = Styles.blue;
  }
  
  return (
    <div className={Styles.Cockpit}>
      <button className={activeClass} onClick={props.handler}>
        Toggle Persons
      </button>
    </div>
  );
}


export default Cockpit;