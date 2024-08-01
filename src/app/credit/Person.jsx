import React from 'react';
import { useState, useEffect } from 'react'

const Person = () => {
  const [formData, setFormData] = useState({fullname:"", typedoc:"", nroDoc:"", gender:""})

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
    
  }
  function handleSubmit(e){
    e.preventDefault();
  
    fetch('http://127.0.0.1:8000/api/people/', {
      method:'POST', 
      headers:{
        'Content-Type':'application/vnd.api+json'},
      body:JSON.stringify({ "data":{
        "type": "Person",
        "attributes": {
            "fullname": formData.fullname,
            "typedoc": formData.typedoc,
            "nroDoc": formData.nroDoc,
            "gender": formData.gender
        }
      }})})
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));


      
     console.log(formData)
  }

  function prueba(e){
    e.preventDefault();
    //console.log("dd");
    fetch('http://127.0.0.1:8000/api/people/')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    

    //alert(JSON.stringify(formData));
    
  }

  return (

    <form onSubmit={handleSubmit}>
    <div className="p-4 border rounded-lg shadow-md">
      <label className="block mb-2 font-semibold">Full Name</label>
      <input
        type="text"
        name='fullname'
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter full name"
        value={formData.fullname}
        onChange={handleChange}
      />
  
      <label className="block mt-4 mb-2 font-semibold">Type of Document</label>
      <select
      name='typedoc'
      value={formData.typedoc}
      onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="Nit">Nit</option>
        <option value="CC">Cedula Ciudadania</option>
        {/* Add more options as needed */}
      </select>
  
      <label className="block mt-4 mb-2 font-semibold">Document Number</label>
      <input
        type="number"
        name='nroDoc'
        value={formData.nroDoc}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter document number"
      />
  
      <label className="block mt-4 mb-2 font-semibold">Gender</label>
      <select
      name='gender'
      value={formData.gender}
      onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        {/* Add more options as needed */}
      </select>
  
      
    </div>
    <button type='submit'>Register</button>
    </form>
  );
  
};






export default Person;
