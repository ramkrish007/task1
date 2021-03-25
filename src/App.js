import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import {nameToArray} from './logic'
import Button from "@material-ui/core/Button"

function App  () {


  const [personone, setPersonone] = useState("");
  const [persontwo, setPersontwo] = useState("");
  const [result, setResult] = useState("")


  const nameToArray = (name) => {
    let updatedName = name.toUpperCase();
    
    updatedName = updatedName.replace(/\s+/g, "");
    
    return updatedName.split("");
  }

  const handleSubmit =  e => {
    e.preventDefault();
    setResult("")

    let pOne = nameToArray(personone);
    let pTwo = nameToArray(persontwo);
    var flames = ['Friends','Love','Affair','Marriage','Enemy','Sister'];
    
    console.log(flames)

    console.log(pOne);
    console.log(pTwo);

    if (personone.length >0 && persontwo.length >0){
      var totalNameLength = personone.length+persontwo.length; 
      
      while(flames.length !== 1)
      {
       flames = flames.splice(totalNameLength%6,1);
      }
      console.log(flames)
      setResult(flames)
    }
    
    //console.log(difference)

  }

  /*
  let Personone = e.target.elements.name.value;
  let Persontwo = e.target.elements.name_two.value;
  */


  return (
    <div className="App" style={{backgroundColor: 'blue', height: '100vh', paddingTop: '100px'}}>
      <h1 style={{fontStyle: 'italic', paddingBottom: '5px'}}>FLAMES</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" placeholder="nameone" onChange={e => setPersonone(e.target.value)} />
        </label>
        <br></br>
        <label>
          <input type="text" name="name_two" placeholder="nametwo" onChange={e => setPersontwo(e.target.value)} />
        </label>
        <div>
          <Button variant="contained" 
          style={{
            fontSize: 16
          }}
          color="primary" 
          type="submit">Submit</Button>
        </div>
        </form>
        <br></br>
        <h3>{result}</h3>
    </div>

  );
}

export default App;
