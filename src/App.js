import React from "react"
import CountDown from "./components/CountDown";
import StopWatch from "./components/StopWatch"
function App() {
  return (
    <div className="App">
      <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="flex flex-col items-center">
        <h3 className="tracking-widest text-xl text-white mb-5 font-bold text-gray-800">COUNTDOWN</h3>
        <CountDown hours={1} minutes={59} seconds={0}/>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="tracking-widest text-xl text-white mb-5 ml-10 font-bold text-gray-800">STOPWATCH</h3>
        <StopWatch/>
      </div>
      </section>
    </div>
  );
}

export default App;
