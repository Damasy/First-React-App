import React from "react";
import './Person.css';

const person = params => {
  return (
    <div className="Person">
      <p onClick={params.delete}>
        I'm {params.name} ! and I'm {params.age} years old, {params.children}
      </p>
      <input type="text" onChange={params.handler} value={params.name}/>
    </div>
  );
};

export default person;
