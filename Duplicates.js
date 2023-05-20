import React,{useState} from "react";
import './Duplicate.css'

const Duplicates=()=>{
    const[name,setName] = useState("")
    const[enteredNames,setEnteredNames] = useState("")
    const[data,setData] = useState("")

    const onChange = (event)=>{
        setName(event.target.value)
    }
    const onSubmit= (event)=>{
        setEnteredNames([...enteredNames, name])
    }
    const removeDup = ()=>{
        const uniqueNames = [...new Set(name)]
        setData(uniqueNames.map((value,index)=><span key={index}>{value}</span>))
    }

    return(
        <div className="myDiv"> 
         <label for="username">Name: </label>
         <input type="text" placeholder="Enter your name" name="username"  onChange={onChange}/><br></br>
         <button onClick={onSubmit} id="btn1">Submit</button><br></br>
         <h5>My name is : <b>{enteredNames}</b>  </h5>
         <p id="para">To remove duplicates in above name ...(click below button)</p>
         <button onClick={removeDup} id="btn2">Remove Dup's</button>
         <h5>After Removing Duplicates : {data}</h5><br></br>
         
        </div>
    );
}
export  default Duplicates
