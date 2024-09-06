
import React, { useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import FormSelect from '../utils/FormSelect';
import FormInput from '../utils/FormInput';




const PersonalDetailsForm = () => {

  let params = useParams()
  const navi = useNavigate() ;
  let id = 0
  const [formData, setFormData] = useState({
    dateexpnrodoc: '',
    cityexpnrodoc: '',
    birthcity: '',
    birthdate: '',
    streetaddress: '',
    neighborhood:'',
    hometype: '',
    phonenumber: '',
    phonenum: '',
    cityresidence: '',
    email: '',
    familiarref:"",
    familiaper:"",
    famirefphone:"",
    refperphone:"",
    person:params.id
  });

  

  const inputs = [
    {
      id: 1,
      name:"dateexpnrodoc",
      type:"date",
      placeholder:" ",
      errorMessage:"Fecha Invalida",
      label:"Fecha Expedicion Documento",
      pattern:"^([0-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])\\2(\\d{4})$",
      required:true
    },{
      id:2,
      name:"cityexpnrodoc",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Ciudad Expedicion Documento",
      pattern:"^[A-Za-z\\,\\s*]{3,25}$",
      required:true
    },{
      id:3,
      name:"birthcity",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Ciudad de Nacimiento",
      pattern:"^[A-Za-z\\,\\s*]{3,50}$",
      required:true
    },{
      id:4,
      name:"birthdate",
      type:"date",
      placeholder:" ",
      errorMessage:"Fecha no Valida",
      label:"Fecha de Nacimiento",
      pattern:"^([0-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])\\2(\\d{4})$",
      required:true
    },
    {
      id:5,
      name:"streetaddress",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Direccion Residencia",
      pattern:"^[A-Za-z0-9\\#\\(\\)\\-\\_\\,\\s*]*",
      required:false
    },
    {
      id:6,
      name:"neighborhood",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Barrio",
      pattern:"^[A-Za-z\\,\\s*]{3,50}",
      required:false
    },
    {
      id:7,
      name:'hometype',
      type:'select',
      placeholder:' ',
      errorMessage:'Seleccione un Item',
      label:'Tipo Vivienda',
      pattern:"",
      required:true,
      options:  [{
              label: 'Propia',
              value:'Propia'
              },{
                label: 'Familiar',
                value:'Familiar'
            },{
              label: 'Arriendo',
              value: 'Arriendo'
            }]
    },
    {
      id:8,
      name:'phonenumber',
      type:'tel',
      placeholder:' ',
      errorMessage:'No incluir caracteres especiales ni letras',
      label:'Telefono Casa',
      pattern:'^[0-9]{8,14}$',
      required:true
    },
    {
      id:9,
      name:'phonenum',
      type:'tel',
      placeholder:' ',
      errorMessage:'No incluir caracteres especiales ni letras',
      label:'Telefono',
      pattern:'^[0-9]{8,14}$',
      required:true
    },
    {
      id:10,
      name:"cityresidence",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Ciudad Residencia",
      pattern:"^[A-Za-z\\,\\s*]{3,100}$",
      required:true
    },
    {
      id:11,
      name:"email",
      type:"text",
      placeholder:" ",
      errorMessage:"Email no Valido",
      label:"Email",
      pattern:"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",
      required:false
    },{
      id:12,
      name:"familiarref",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Referencia Familiar",
      pattern:"^[A-Za-z\\s*]{3,50}$",
      required:false
    },
    {
      id:13,
      name:"familiaper",
      type:"text",
      placeholder:" ",
      errorMessage:"No incluir caracteres especiales",
      label:"Referencia Personal",
      pattern:"^[A-Za-z\\s*]{3,50}$",
      required:false
    },
    {
      id:14,
      name:"famirefphone",
      type:"text",
      placeholder:" ",
      errorMessage:"Telefono no Valido",
      label:"Telefono Referecia Familiar",
      pattern:"^[0-9]{3,12}$",
      required:false
    },
    {
      id:15,
      name:"refperphone",
      type:"text",
      placeholder:" ",
      errorMessage:"Telefono no Valido",
      label:"Telefono Referencia Personal",
      pattern:"^[0-9]{3,12}$",
      required:false
    }

  ]

  const onChange= (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  setFormData(Object.fromEntries(Object.entries(formData).map(([key,value]) => [key, value == "" ? null: value])));

    fetch('https://tafcarbackendapi.onrender.com/api/details/', {
      method:'POST', 
      headers:{
        'Content-Type':'application/vnd.api+json'},
      body:JSON.stringify({ "data":{
        "type": "DetailsPerson",
        "attributes": {
            "person":formData.person,
            "dateexpnrodoc":formData.dateexpnrodoc,
            "cityexpnrodoc": formData.cityexpnrodoc,
            "birthcity": formData.birthcity,
            "birthdate": formData.birthdate,
            "streetaddress": formData.streetaddress,
            "neighborhood": formData.neighborhood,
            "hometype": formData.hometype,
            "phonenumber": formData.phonenumber,
            "phonenum": formData.phonenum,
            "cityresidence": formData.cityresidence,
            "email": formData.email,
            "familiarref":formData.familiarref,
            "familiaper":formData.familiaper,
            "famirefphone":formData.famirefphone,
            "refperphone":formData.refperphone


        }
      }})})
      .then((response) => {return response.json()})
      .then(manageData, error)
      .catch((error) => console.error(error));
  };

  function manageData(data){

    if (data.data){
      id = JSON.stringify(data.data.id);
    id = id.toString().substring(1,id.toString().length -1);
    console.log ("datos:" +id);
    navi("/activity/" + id)  
    }else{
      console.error("Error")
    }
    
  }
  function error (mes){
    console.log(mes);
  }

  function prueba(e){
    e.preventDefault();
    
    
    fetch('http://127.0.0.1:8000/api/details/')
      .then((response) => {return response.json()})
      .then(manageData, error);
   
  }


    

  return (
    <div>
      <div className="w-1/2 my-6 mx-auto p-6 bg-gray-100 rounded-xl">
        <form onSubmit={handleSubmit} noValidate className='group'>

          <div className="grid grid-cols-2 gap-6 mb-5 font-semibold text-gray-400">
            
            {inputs.map((input)=> { 
              
              if (input.type === 'text' || input.type === 'number'  || input.type == 'date'|| input.type == 'tel'  || input.email == 'email'){
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
          <button type="submit" className="mt-6 py-4 px-8 text-lg bg-teal-500 hover:bg-teal-700 rounded-xl text-white justify-center group-invalid:pointer-events-none group-invalid:opacity-30">
          Siguiente
        </button>
        </form>
        <Outlet></Outlet>
      </div>
    </div>
    
  );
};

export default PersonalDetailsForm;
