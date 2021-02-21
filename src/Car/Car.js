import React from 'react';
import Radium from 'radium';
const car = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div>
      <p onClick={props.click}>This is a {props.color} {props.name}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}/>
    </div>
  );
}
export default car;