import React from 'react';
import './CounterGroup.css';
function Counter(props) {
  let [count, changeCount] = React.useState(0);
  let number = props.number;
  //let {globalCounterNum, globalCounterVal} = props;
  let globalCounterNum = props.globalCounterNum;
  let globalCounterVal = props.globalCounterVal;
  console.log("In counter: Counter "+globalCounterNum+" "+globalCounterVal);
  if(number == Number(globalCounterNum) && count != Number(globalCounterVal)){
    changeCount(Number(globalCounterVal));
    props.resetGlobals();
  }
  let increment = () => {
    changeCount(Number(count)+1);
  }
  let decrement = () => {
    changeCount(Number(count) - 1);
  }
    return (
    <div className="counter">
        <h3>Counter Number {number}</h3>
        <button onClick={increment}>+</button>
        <p>Count : {count}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}
export default Counter