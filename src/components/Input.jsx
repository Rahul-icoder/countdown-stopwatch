import React from 'react'

function Input({label,name,type,onChange,value,...rest}) {
	return (
		<div className="px-4 pb-4">
			<label htmlFor={name} className="text-lg block font-semibold pb-2">{label}</label>
			<input 
				type={type} 
				name={name}
				className="shadow appearance-none leading-tight w-full py-2 px-3 border border-blue-300 rounded text-gray-700 focus:outline-none focus:shadow-outline"
				onChange={onChange} 
				placeholder={label} 
				value={value} 
				{...rest}
			/>
		</div>
	)
}

export default Input