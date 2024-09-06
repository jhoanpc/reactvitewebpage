import React , { useState }from 'react';
import { useParams, Outlet } from 'react-router-dom';
import FormInput from '../utils/FormInput';
import FormSelect from '../utils/FormSelect';



const Activity = ()=>{
    let params = useParams()
    const [formData, setFormData] = useState({
        typeactivity        : 'Empleado',
        bussinesname        : '',
        bussinessaddres     : '',
        bussinessphone      : '',
        jobposition         : '',
        startdatejob        : '',
        contrattype         : '',
        timejobpos          : '',
        pensionfund         : '',
        startDatePF         : '',
        rut                 : '',
        timeactivityrut     : '',
        bussinesnameind1    : 'Alfareros del Medellin',
        nitind1             : '12345678-4',
        phoneind1           : '3135421836',
        bussinesnameind2    : 'Alfareros del Medellin',
        nitind2             : '12345678-4',
        phoneind2           : '3135421836',
        bussinesnameind3    : 'Alfareros del Itagui',
        nitind3             : '12345678-4',
        phoneind3           : '3135421836',
        totalincome         : '8000000',
        rentdel             : false,
        totalexpenses       : '6000000',
        totalassets         : '34000000',
        person:params.id
      });

      const inputs = [
        {
            id:1,
            name:'typeactivity',
            type:'select',
            placeholder:' ',
            errorMessage:'Seleccione un Item',
            label:'Tipo Actividad',
            pattern:"",
            required:true,
            options:  [{
                    label: 'Empleado',
                    value:'Empleado'
                    },{
                      label: 'Independiente',
                      value:'Independiente'
                  },{
                    label: 'Rentista de Capital',
                    value: 'RENTCAPI'
                  },{
                    label: 'Pension',
                    value: 'Pension'
                  }]
          },{
          id: 2,
          name:"bussinesname",
          type:"text",
          placeholder:" ",
          errorMessage:"No incluir caracteres especiales",
          label:"Nombre Negocio",
          pattern:"[A-Za-z\\,\\s*]{3,50}",
          required:false
        },{
          id:3,
          name:"bussinessaddres",
          type:"text",
          placeholder:" ",
          errorMessage:"No incluir caracteres especiales",
          label:"Direccion Negocio",
          pattern:"^[A-Za-z0-9\\,\\#\\-\\_\\s*]{3,25}$",
          required:false
        },{
          id:4,
          name:"bussinessphone",
          type:"text",
          placeholder:" ",
          errorMessage:"Solo numeros",
          label:"Telefono Negocio",
          pattern:"^[0-9]{3,12}$",
          required:false
        },{
          id:5,
          name:"jobposition",
          type:"text",
          placeholder:" ",
          errorMessage:"No incluir caracteres especiales",
          label:"Cargo",
          pattern:"^[A-Za-z0-9\\s*]{3,25}$",
          required:false
        },
        {
          id:6,
          name:"startdatejob",
          type:"date",
          placeholder:" ",
          errorMessage:"Fecha Invalida",
          label:"Fecha Inicio Cargo",
          pattern:"^([0-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])\\2(\\d{4})$",
          required:false
        },
        {
          id:7,
          name:"contrattype",
          type:"text",
          placeholder:" ",
          errorMessage:"No incluir caracteres especiales",
          label:"Tipo Contrato",
          pattern:"^[A-Za-z\\s*]{3,25}",
          required:false
        },
        {
          id:8,
          name:'timejobpos',
          type:'number',
          placeholder:' ',
          errorMessage:'Solo numeros',
          label:'Tiempo en el Cargo',
          pattern:'^[0-9]{1,3}$',
          required:false
        },
        {
          id:9,
          name:'pensionfund',
          type:'text',
          placeholder:' ',
          errorMessage:'No incluir caracteres especiales ni letras',
          label:'Fodo de Pensiones',
          pattern:'^[A-Za-z\\s*]{3,50}',
          required:false
        },
        {
            id:10,
            name:"startDatePF",
            type:"date",
            placeholder:" ",
            errorMessage:"Fecha no Valida",
            label:"Fecha Inicio Pension",
            pattern:"^([0-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])\\2(\\d{4})$",
            required:false
          },
        {
          id:11,
          name:"rut",
          type:"number",
          placeholder:" ",
          errorMessage:"No incluir caracteres especiales",
          label:"Numero RUT",
          pattern:"^[0-9\\-\\s*]{3,14}$",
          required:false
        },
        {
          id:12,
          name:"timeactivityrut",
          type:"number",
          placeholder:" ",
          errorMessage:"No incluir caracteres especiales",
          label:"Tiempo Actividad RUT",
          pattern:"^[0-9\\s*]{1,3}$",
          required:false
        }
    
      ]

      const onChange= (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
      }

      const onSelectChange= (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
        
        if (e.target.name =='typeactivity'){
            
            cleanComponents();

            if(e.target.value == 'Empleado'){
                
                hidePensionComponents();
                hideRutComponents();
            }

            if(e.target.value == 'Independiente'){
                
                hidePensionComponents();
                hideEmpleadoComponents();
            }

            if(e.target.value == 'Pension'){
                
                hideRutComponents();
                hideEmpleadoComponents();
            }


                                   
        }
      }

      const cleanComponents = ()=>{

        let classNameInput ="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        let classNameLabel ="block mt-4 mb-2 font-semibold"

        var _pensiFun = document.getElementById('9')
        var _pensiFunLabel = document.getElementById('9Label')

        _pensiFun.className = classNameInput;
        _pensiFunLabel.className = classNameLabel;

        var _datepensiFun = document.getElementById('10')
        var _datepensiFunLabel = document.getElementById('10Label')
        
        _datepensiFun.className = classNameInput;
        _datepensiFunLabel.className = classNameLabel;

        var _numRut = document.getElementById('11')
        var _numRutLabel = document.getElementById('11Label')
        
        _numRut.className = classNameInput;
        _numRutLabel.className = classNameLabel;

        var _timeRut = document.getElementById('12')
        var _timeRutLabel = document.getElementById('12Label')
        
        _timeRut.className = classNameInput;
        _timeRutLabel.className = classNameLabel;

        var _jobPosition = document.getElementById('5')
        var _jobPositionLabel = document.getElementById('5Label')

        _jobPosition.className = classNameInput;
        _jobPositionLabel.className = classNameLabel;
        
        var _startdatejob = document.getElementById('6')
        var _startdatejobLabel = document.getElementById('6Label')

        _startdatejob.className = classNameInput;
        _startdatejobLabel.className = classNameLabel;

        var _contrattype = document.getElementById('7')
        var _contrattypeLabel = document.getElementById('7Label')

        _contrattype.className = classNameInput;
        _contrattypeLabel.className = classNameLabel;

        var _timejobpos = document.getElementById('8')
        var _timejobposLabel = document.getElementById('8Label')

        _timejobpos.className = classNameInput;
        _timejobposLabel.className = classNameLabel;
      }

      const hidePensionComponents = ()=>{

        var _pensiFun = document.getElementById('9')
        var _pensiFunLabel = document.getElementById('9Label')

        var _datepensiFun = document.getElementById('10')
        var _datepensiFunLabel = document.getElementById('10Label')
                
                if (_pensiFun){
                    _pensiFun.className = 'hidden'
                    _pensiFunLabel.className = 'hidden'

                    _datepensiFun.className = 'hidden'
                    _datepensiFunLabel.className = 'hidden'
                }
                
      }

      const hideRutComponents = ()=>{

        var _numRut = document.getElementById('11')
        var _numRutLabel = document.getElementById('11Label')
        
        var _timeRut = document.getElementById('12')
        var _timeRutLabel = document.getElementById('12Label')

        if (_numRut){
            _numRut.className = 'hidden'
            _numRutLabel.className = 'hidden'

            _timeRut.className = 'hidden'
            _timeRutLabel.className = 'hidden'
        }

      }

      const hideEmpleadoComponents = ()=>{

        var _jobPosition = document.getElementById('5')
        var _jobPositionLabel = document.getElementById('5Label')
        
        var _startdatejob = document.getElementById('6')
        var _startdatejobLabel = document.getElementById('6Label')

        var _contrattype = document.getElementById('7')
        var _contrattypeLabel = document.getElementById('7Label')

        var _timejobpos = document.getElementById('8')
        var _timejobposLabel = document.getElementById('8Label')

        if (_jobPosition){
            _jobPosition.className = 'hidden'
            _jobPositionLabel.className = 'hidden'
            _jobPosition.required=true

            _startdatejob.className = 'hidden'
            _startdatejobLabel.className = 'hidden'
            _startdatejob.required=true

            _contrattype.className = 'hidden'
            _contrattypeLabel.className = 'hidden'
            _contrattype.required=true

            _timejobpos.className = 'hidden'
            _timejobposLabel.className = 'hidden'
            _timejobpos.required=true
        }

      }

      
      const handleSubmit = (event)=>{
        event.preventDefault()

        /*console.log(JSON.stringify({"data":{
            "type":"DetailsEconomicActivity",
            "attributes":{
                "typeactivity": formData.typeactivity,
                "bussinesname": formData.bussinesname,
                "bussinessaddres": formData.bussinessaddres,
                "bussinessphone": formData.bussinessphone,
                "jobposition": formData.jobposition,
                "startdatejob": formData.startdatejob,
                "contrattype": formData.contrattype,
                "timejobpos": formData.timejobpos,
                "pensionfund": formData.pensionfund,
                "startDatePF": formData.startDatePF,
                "rut": formData.rut,
                "timeactivityrut": formData.timeactivityrut,
                "bussinesnameind1": formData.bussinesnameind1,
                "nitind1": formData.nitind1,
                "phoneind1": formData.phoneind1,
                "bussinesnameind2": formData.bussinesnameind2,
                "nitind2": formData.nitind2,
                "phoneind2": formData.phoneind2,
                "bussinesnameind3": formData.bussinesnameind3,
                "nitind3": formData.nitind3,
                "phoneind3": formData.phoneind3,
                "totalincome":formData.totalincome,
                "rentdel": formData.rentdel,
                "totalexpenses": formData.totalexpenses,
                "totalassets": formData.totalassets,
                "person":formData.id
            }
        }}));*/

        fetch('http://127.0.0.1:8000/api/activity/', {
            method:'POST',
            headers:{
                'Content-Type':'application/vnd.api+json'},
            body:JSON.stringify({"data":{
                "type":"DetailsEconomicActivity",
                "attributes":{
                    "typeactivity": formData.typeactivity,
                    "bussinesname": formData.bussinesname,
                    "bussinessaddres": formData.bussinessaddres,
                    "bussinessphone": formData.bussinessphone,
                    "jobposition": formData.jobposition,
                    "startdatejob": formData.startdatejob,
                    "contrattype": formData.contrattype,
                    "timejobpos": formData.timejobpos,
                    "pensionfund": formData.pensionfund,
                    "startDatePF": formData.startDatePF,
                    "rut": formData.rut,
                    "timeactivityrut": formData.timeactivityrut,
                    "bussinesnameind1": formData.bussinesnameind1,
                    "nitind1": formData.nitind1,
                    "phoneind1": formData.phoneind1,
                    "bussinesnameind2": formData.bussinesnameind2,
                    "nitind2": formData.nitind2,
                    "phoneind2": formData.phoneind2,
                    "bussinesnameind3": formData.bussinesnameind3,
                    "nitind3": formData.nitind3,
                    "phoneind3": formData.phoneind3,
                    "totalincome":formData.totalincome,
                    "rentdel":      formData.rentdel,
                    "totalexpenses": formData.totalexpenses,
                    "totalassets": formData.totalassets,
                    "person":formData.person
                }
            }})
        })
        .then((response)=> {return response.json()})
       // .then(manageData, error)
        .catch((error) => console.error(error))
      }


    

    
  return(
    <div>
        <div className="w-1/2 my-6 mx-auto p-6 bg-gray-100 rounded-xl">
            <form onSubmit={handleSubmit} noValidate className='group' >
            <div className="grid grid-cols-2 gap-6 mb-5 font-semibold text-gray-400">

                {inputs.map((input)=> {
                    if (input.type === 'text' || input.type === 'number' || input.type == 'date' || input.type == 'tel'  || input.email == 'email'){
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
                          onChange={onSelectChange} ></FormSelect>
                        )
                       }

                })

                }



            </div>

                <div>
                    <div className="grid grid-cols-3 gap-6 mb-5 font-semibold text-gray-400">

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Nombre de Negocio</label>
                            <input
                                type="text"
                                value={formData.bussinesnameind1}
                                onChange={(event) =>
                                setFormData({ ...formData, bussinesnameind1: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Nit Negocio </label>
                            <input
                                type="text"
                                value={formData.nitind1}
                                onChange={(event) =>
                                setFormData({ ...formData, nitind1: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Telefono</label>
                            <input
                                type="number"
                                value={formData.phoneind1}
                                onChange={(event) =>
                                setFormData({ ...formData, phoneind1: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-3 gap-6 mb-5 font-semibold text-gray-400">

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Nombre de Negocio</label>
                            <input
                                type="text"
                                value={formData.bussinesnameind2}
                                onChange={(event) =>
                                setFormData({ ...formData, bussinesnameind2: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Nit Negocio </label>
                            <input
                                type="text"
                                value={formData.nitind2}
                                onChange={(event) =>
                                setFormData({ ...formData, nitind2: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="grid grid-cols-3 gap-6 mb-5 font-semibold text-gray-400">Telefono</label>
                            <input
                                type="number"
                                value={formData.phoneind2}
                                onChange={(event) =>
                                setFormData({ ...formData, phoneind2: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-3 gap-6 mb-5 font-semibold text-gray-400">

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Nombre de Negocio</label>
                            <input
                            id='14'
                                type="text"
                                value={formData.bussinesnameind3}
                                onChange={(event) =>
                                setFormData({ ...formData, bussinesnameind3: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Nit Negocio</label>
                            <input
                            id='14'
                                type="text"
                                value={formData.nitind3}
                                onChange={(event) =>
                                setFormData({ ...formData, nitind3: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Telefono</label>
                            <input
                            id='14'
                                type="number"
                                value={formData.phoneind3}
                                onChange={(event) =>
                                setFormData({ ...formData, phoneind3: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-5 font-semibold text-gray-400">
                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Total Ingresos</label>
                            <input
                            id='14'
                                type="text"
                                value={formData.totalincome}
                                onChange={(event) =>
                                setFormData({ ...formData, totalincome: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Declara Renta?</label>
                            <input
                            id='14'
                                type="radio"
                                value={formData.rentdel}
                                onChange={(event) =>
                                setFormData({ ...formData, rentdel: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Total Gastos</label>
                            <input
                            id='14'
                                type="text"
                                value={formData.totalexpenses}
                                onChange={(event) =>
                                setFormData({ ...formData, totalexpenses: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block mt-4 mb-2 font-semibold">Total Activos</label>
                            <input
                            id='14'
                                type="text"
                                value={formData.totalassets}
                                onChange={(event) =>
                                setFormData({ ...formData, totalassets: event.target.value })
                                }
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        
                </div>

                <button type="submit" className="mt-6 py-4 px-8 text-lg bg-teal-500 hover:bg-teal-700 rounded-xl text-white justify-center group-invalid:pointer-events-none group-invalid:opacity-30">
                Guardar
                </button>
                                
                </form>
            </div>
            <Outlet></Outlet>
    </div>
  )
}
export default Activity;