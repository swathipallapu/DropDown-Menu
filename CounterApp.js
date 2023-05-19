import React,{useState} from 'react'

const CounterApp = () =>{
    const[count,setCount] = useState(0)
    return(
        <>
        <h1>CountApp : {count}</h1>
         <button type="button" onClick={()=>setCount(count+1)}>Increment</button>&nbsp;&nbsp;
         <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
    
        </>
    );
}
export default CounterApp

