import React,{useState} from 'react'

function Tooltip({children,text}) {
	const [isTool, setIsTool] = useState(false);
	const openTooltip = () =>{
		setIsTool(true)
	}

	const closeTooltip = () =>{
		setIsTool(false)
	}
	return (
		<div className="flex flex-col justify-center">
			{isTool ? <span className="bg-black display-none bg-opacity-80 p-1 w-10 rounded text-white h-8">{text}</span> : <span className="h-8"></span>}
			<div className="p-3" onMouseOver={openTooltip} onMouseOut={closeTooltip}>{children}</div>
		</div>
	)
}

export default Tooltip