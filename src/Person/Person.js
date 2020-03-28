import React from "react";
import './Person.css';
import Radium from 'radium';

const person = params => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div style={style} className="Person">
      <p onClick={params.delete}>
        I'm {params.name} ! and I'm {params.age} years old, {params.children}
      </p>
      <input type="text" onChange={params.handler} value={params.name}/>
    </div>
  );
};

export default Radium(person);
