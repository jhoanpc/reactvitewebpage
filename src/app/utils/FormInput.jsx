import React from 'react'



const  FormInput = (props) => {
  
    const {label, errorMessage, onChange, id, ...inputProps} = props;
  
    let idLabel = id + 'Label'
    
    
    
    return (
     /* <div className=''>
        <label>{label}</label>
        <input 
        {...inputProps}
        onChange={onChange}
        >
        </input>
        <span>{erroMessage}</span>
      </div>*/
      <div >
        
        <label id = {idLabel}   className="block mt-4 mb-2 font-semibold">{label}</label>
        <input   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
        key={id}
        id={id} 
        {...inputProps}
        onChange={onChange}
        >
        </input>
        <span  className='mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>{errorMessage}</span>
      </div>
    )
  
}

export default FormInput