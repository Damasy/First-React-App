import React from "react";
import styles from './Person.module.css';

const person = params => {
  return (
    <div className={styles.Person}>
      <p onClick={params.delete}>
        I'm {params.name} ! and I'm {params.age} years old, {params.children}
      </p>
      <input type="text" onChange={params.handler} value={params.name}/>
    </div>
  );
};

export default person;
