import React from 'react'

function Select({name,value,label,...rest}) {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<select name={name} onChange={onChange} value={value} {...rest}>
				<option value="">choose</option>
			</select>
		</div>
	)
}

export default Select