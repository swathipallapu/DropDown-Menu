import React,{useState} from 'react'
import "./DropDown.css"

const DroDown = () => {
    const[data,setData] = useState("")

    const handler= e =>{
        e.preventDefault();
        setData(document.getElementById('fruits').value)
    }
    
    const arr = ["apple","banana","grapes","mango","kiwi"]

  return (
    <div id="myDiv"> 
       <label id="myLabel"><b>Choose a fruit :</b></label>  
          <select name="fruits" id="fruits">
              <option value="">select an option</option>
              <option value={arr[0]}>{arr[0]}</option>
              <option value={arr[1]}>{arr[1]}</option>
              <option value={arr[2]}>{arr[2]}</option>
              <option value={arr[3]}>{arr[3]}</option>
              <option value={arr[4]}>{arr[4]}</option>
          </select><br></br>

       <button onClick={handler} id="btn">Submit</button>
       <h1>My selected fruit is : "{data}"</h1>
    </div>
  )
}

export default DroDown

