import React, {useState} from 'react';
import './Counter.css'

function Counter() {
    const [counterVal, setCounterVal] = useState(0);
    const [inputval, setInputVal] = useState(1);

    const addToCounter= () => {
        setCounterVal (counterVal + inputval);
    };

    const subtractFromCounter= () => {
        setCounterVal (counterVal - inputval);
    }
  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h1 data-testid="counter">{counterVal}</h1>
      <button data-testid="subtract-btn" onClick={subtractFromCounter}>-</button>
      <input 
        data-testid="input" 
        type="number" 
        value={inputval} 
        className="text-center"
        onChange={(e) => {
            setInputVal(parseInt(e.target.value));
        }}
        />
      <button data-testid="add-btn" onClick={addToCounter}>+</button>
    </div>
  );
}

export default Counter;
