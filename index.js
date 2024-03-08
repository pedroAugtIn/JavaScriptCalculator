import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
  
    const [display, setDisplay] = React.useState('0');
  
    const changevalue = (event) => {
    const value = event.target.value;

    if (value === '0' && display === '0') {
      return; 
    }
      
    if (display === '0' && value !== '.') {
      setDisplay(value);
      return;
    }

    setDisplay(display + value);
  }
    
     const splitExpression = () => {
     const numbers = display.split(/[-+*/]/);
     const lastElement = numbers[numbers.length -1]
           
     if (!lastElement.includes('.')){
       setDisplay(display + '.')
     }
 }
    
    const calculate = () => {
    let filtered = display.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g);
    filtered = filtered ? filtered.join('') : '0';
    const sum = eval(filtered);
    setDisplay(sum.toString());
  }
  
  const cleardisplay = () => {
    setDisplay('0');
  }
  
  return(
  <div id="container">
      <h1>JavaScript Calculator</h1>
      <div><p id="display">{display}</p></div>
      <div id="line1">
        <button id="clear" value="" onClick={cleardisplay}>AC</button>
        <button id="multiply" value="*" onClick={changevalue}>*</button>
      </div>
      <div id="line2">
        <button id="seven" value="7" onClick={changevalue}>7</button>
        <button id="eight" value="8" onClick={changevalue}>8</button>
        <button id="nine" value="9" onClick={changevalue}>9</button>
        <button id="divide" value="/" onClick={changevalue}>/</button>
      </div>
      <div id="line3">
        <button id="four" value="4" onClick={changevalue}>4</button>
        <button id="five" value="5" onClick={changevalue}>5</button>
        <button id="six" value="6" onClick={changevalue}>6</button>
        <button id="add" value="+" onClick={changevalue}>+</button>
      </div>
      <div id="line4">
        <button id="one" value="1" onClick={changevalue}>1</button>
        <button id="two" value="2" onClick={changevalue}>2</button>
        <button id="three" value="3" onClick={changevalue}>3</button>
        <button id="subtract" value="-" onClick={changevalue}>-</button>
      </div>
      <div id="line5">
        <button id="zero" value="0" onClick={changevalue}>0</button>
        <button id="decimal" value="." onClick={splitExpression}>.</button>
        <button id="equals" onClick={calculate}>=</button>
      </div>
  </div>
  )
}
      
ReactDOM.render(<App/>, document.querySelector("#box"))