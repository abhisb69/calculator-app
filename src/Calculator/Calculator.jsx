import React, { useState } from "react";
import "../Calculator/Calculator.css"

function Calculator() {
  const [equation, setEquation] = useState("");

  const deletee=()=>{
    try{
      setEquation(equation.slice(0,-1))
    }catch{
      setEquation('')
    }
  }
  const zero=(e)=>{
    if(equation[0]==0)  {
      setEquation(e.target.value)
    }
    else{
      setEquation(equation+e.target.value)
    }
  }
  const equal=(e)=>{
    try {
      setEquation(eval(equation))
    } catch (error) {
      setEquation("Error 69")
    }
  }
  return (
    <div className="calculator-wrapper">
      <div className="Display">{equation}</div>
      <hr />
      <div className="calculator-rows">
        <input type="button" value="AC" className="btn" onClick={(e)=>setEquation('')}/>
        <input type="button" value="X" className="btn" onClick={deletee}/>
        <input type="button" value="%" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="/" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
      </div>
      <div className="calculator-rows">
      <input type="button" value="7" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="8" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="9" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value='*' className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
      </div>
      <div className="calculator-rows">
      <input type="button" value="4" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="5" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="6" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="-" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
      </div>
      <div className="calculator-rows">
      <input type="button" value="1" className="btn" onClick={zero}/>
        <input type="button" value="2"className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="3" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="+" className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
      </div>
      <div className="calculator-rows">
        <input type="button" value="0" className="btn" onClick={zero}/>
        <input type="button" value="." className="btn" onClick={(e)=>setEquation(equation+e.target.value)}/>
        <input type="button" value="=" className="btnn" onClick={equal}/>
      </div>
    </div>
  );
}
export default Calculator;
