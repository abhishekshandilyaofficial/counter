import React from 'react'
import './Reset.css';
function Reset(props) {
    const [countNumberVal, setcountNumberVal] = React.useState("");
    const [countVal, setcountVal] = React.useState("");
    const setInput1 = (e) => {
        setcountNumberVal(e.target.value)
    }
    const setInput2 = (e) => {
        setcountVal(e.target.value)
    }
    const resetCounter = () => {
        console.log("Reset : Counter Number: "+countNumberVal);
        console.log("Reset : CountVal: "+countVal);
        props.getResetData(countNumberVal, countVal);
    }
  return (
    <div className='reset'>
        <h2>Reset Counter</h2>
        <div className='counter-num'>
            <span>Counter Number: </span>
            <input type="text" value={countNumberVal} onChange={setInput1}></input>
        </div>
        <div className='counter-val'>
            <span>Counter Value: </span>
            <input type="text" value={countVal} onChange={setInput2}></input>
        </div>
        <button onClick={resetCounter}>Reset Counters</button>
    </div>
    
      )
}

export default Reset