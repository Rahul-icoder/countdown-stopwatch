import React,{useState,useEffect} from 'react'

const StopWatch = () => {
  const [time, setTime] = useState({hours:0,minutes:0,seconds:0})
  const [isActive, setIsActive] = useState(false);
  const [isTimer,setIsTimer] = useState(true);
  const reset = () => {
  	setTime({hours:0,minutes:0,seconds:0})
  	setIsActive(false);
  	setIsTimer(true);
  }
  const stopwatch = () =>{
  	if(isTimer){
  		if(time.hours === 1) 
        console.log('stop stop-watch')
  		else if(time.minutes===60 && time.seconds===60)
  			setTime({hours:time.hours+1,minutes:0,seconds:0})
  		else if(time.seconds===60)
  			setTime({hours:time.hours,minutes:time.minutes+1,seconds:0})
  		else
  			setTime({hours:time.hours,minutes:time.minutes,seconds:time.seconds+1})
  	}
  }

  useEffect(() => {
  	let timerId
  	if(isActive)
  		 timerId = setInterval(()=>stopwatch(),1000)
  	return () => {
  		clearInterval(timerId)
  	};
  })
	return (
		<div className="text-white  rounded-full h-96 w-96 flex flex-col ml-10 justify-center items-center bg-gray-800">
			<p className="text-3xl font-bold">{`${time.hours.toString().padStart(2, 0)} : ${time.minutes.toString().padStart(2, 0)} : ${time.seconds.toString().padStart(2, 0)}`}</p>
			{
				isActive ? 
				<div>
					<button className="mt-10 rounded bg-purple-500 text-lg p-2 w-20 tracking-widest hover:bg-purple-700 focus:outline-none" onClick={reset}>
						RESET
					</button>
					<button className="mt-10 rounded bg-purple-500 text-lg p-2 w-26 tracking-widest hover:bg-purple-700 focus:outline-none ml-3" onClick={()=>setIsTimer(!isTimer)}>
						{isTimer ? "PAUSE" : "RESUME"}
					</button>

				</div>
				:
				<div>
					<button className="mt-10 rounded bg-purple-500 text-lg p-2 w-20 tracking-widest hover:bg-purple-700 focus:outline-none" onClick={()=>setIsActive(true)}>
						START
					</button>
				</div>
			}
		</div>
	)
}

export default StopWatch