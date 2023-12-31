////3 вопрос
const initialObj = { title: "Hello", text: "World" };

//№1
let firstObj = initialObj;
console.log(firstObj);

firstObj.fr = "OK";
console.log(firstObj);

//№2
const secondObj = { ...initialObj };
console.log(secondObj);
console.log(initialObj);

//решение 8 вопроса

class Taimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes || 0,
      seconds: this.props.seconds || 0,
    };
  }
  render() {
    return (
      <div>
        <img src={icon} alt="timer" />
        <p>
          Timer info: {this.state.minutes}: {this.state.seconds}
        </p>
      </div>
    );
  }
}

// 1 практическое задание

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
};

export default Counter;
