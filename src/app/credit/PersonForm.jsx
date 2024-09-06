
import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../utils/FormInput';
import FormSelect from '../utils/FormSelect';



const PersonForm = () => {
  
  const [formData, setFormData] = useState({fullname:"", typedoc:"Nit", nroDoc:"", gender:"Masculino", personId:""})
  

  const inputs = [
    {
      id:1,
      name:"fullname",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Nombres Completos",
      pattern:"^[A-Za-z0-9\\s*]{3,100}$",
      required:true
    },
    {
      id:2,
      name:'typedoc',
      type:'select',
      placeholder:' ',
      errorMessage:'Seleccione un Item',
      label:'Tipo de Identificacion',
      required:true,
      options:  [{
                label: 'Nit',
                value:'Nit'
                },{
                  label: 'Cedula Ciudadania',
                  value:'CC'
              }]
    },
    {
      id:3,
      name:'nroDoc',
      type:'number',
      placeholder:' ',
      errorMessage:'Solo numeros sin espacio',
      label:'Numero de Identificacion',
      pattern:'^[0-9]{8,14}$',
      required:true
    },
    {
      id:4,
      name:'gender',
      type:'select',
      placeholder:' ',
      errorMessage:'Seleccione un Item',
      label:'Sexo',
      pattern:"^[Mas]",
      required:true,
      options:  [{
              label: 'Masculino',
              value:'Masculino'
              },{
                label: 'Femenino',
                value:'Femenino'
            }]
    }
  ];

 
  const onChange= (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }



  const navi = useNavigate() ;
  let id = 0;
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
      .then((response) => {return response.json()})
      .then(manageData, error)
      .catch((error) => console.error(error));

  }

  function prueba(e){
    e.preventDefault();
    //console.log("dd");
     /*let dat = fetch('http://127.0.0.1:8000/api/people/')
      .then((response) => {return response.json()})
      .then((data) => console.log(data))
      .catch((error) => console.error(error));*/
    
    fetch('http://127.0.0.1:8000/api/people/')
      .then((response) => {return response.json()})
      .then(manageData, error);
   
    //alert(JSON.stringify(formData));
    

    
  }

  function manageData(data){

    id = JSON.stringify(data.data.id);
    id = id.toString().substring(1,id.toString().length -1);
    console.log ("datos:" +id);
    navi("/details/" + id)
  }
  function error (mes){
    console.log(mes);
  }

  return (

    <div className="w-1/2 my-6 mx-auto p-6 bg-gray-100 rounded-xl">
      <h1 className=''>Informacion de Usuario</h1>
      
        <form onSubmit={handleSubmit} noValidate className='group'>
          <div className="p-4 border rounded-lg shadow-md">
            
            {inputs.map((input)=> { 
              
              if (input.type === 'text' || input.type === 'number'){
                return (
                  <FormInput 
                  key={input.id} {...input} 
                  label={input.label}
                  value={formData[input.name]}
                  onChange={onChange} ></FormInput>
                )
              }else{
                return (
                  <FormSelect 
                  key={input.id} {...input} 
                  label={input.label}
                  value={formData[input.name]}
                  onChange={onChange} ></FormSelect>
                )
              }
            }
              
            )}
          
          </div>
          <button type='submit' className="mt-6 py-4 px-8 text-lg bg-teal-500 hover:bg-teal-700 rounded-xl text-white group-invalid:pointer-events-none group-invalid:opacity-30">Register</button>
        </form>
      </div>
  );
  
};






export default PersonForm;
