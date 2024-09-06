


import React from 'react'

const FormSelect =(props) => {

    const {label, errorMessage, onChange, id, options, ...inputProps} = props;
  return (
    <div>
        <label className="block mt-4 mb-2 font-semibold">{label}</label>
        <select
        key={id}
        id={id} 
        {...inputProps}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
        >
            
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
          
        </select>
        <span className='mt-2  hidden text-sm text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>{errorMessage}</span>

    </div>
  )
}

export default FormSelect