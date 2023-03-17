import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import data from "./data.json";

function App() {
  const [currentMode, setCurrentMode] = useState("daily");
  const [amountOfTime, setAmountOfTime] = useState("Day");

  const handleDailyBtn = () => {
    setCurrentMode("daily");
    setAmountOfTime("Day");
  };
  const handleWeeklyBtn = () => {
    setCurrentMode("weekly");
    setAmountOfTime("Week");
  };
  const handleMonthlyBtn = () => {
    setCurrentMode("monthly");
    setAmountOfTime("Month");
  };

  return (
    <div className="sm:flex sm:items-center sm:justify-center h-screen">
      <section className="grid container gap-10 w-full h-auto">
        <section className="profile bg-darkBlue">
          <div className="profile-container ">
            <img 
              className="h-20 w-20 border-white border-4 rounded-full"
              src="./assets/images/image-jeremy.png" 
              alt="image-jeremy" 
            
            />
            <h3 className="">Report for</h3>
            <h1 className="">Jeremy Robson</h1>
          </div>
          <div className="">
            <button className={``} onClick={handleDailyBtn}>
              Daily
            </button>
            <button className={``} onClick={handleWeeklyBtn}>
              Weekly
            </button>
            <button className={``} onClick={handleMonthlyBtn}>
              Monthly
            </button>
          </div>
        </section>
        {data.map((item, i) => (
          <section className={`w-full`}>
            <div className="">
              <img src={item.background} alt="" className="" />
            </div>
            <div className="bg-darkBlue px-6 py-3">
              <header className="flex justify-between">
                <h3 className="">{item.title}</h3>
                <div className="">***</div>
              </header>
              <div className="">
                <h2 className="">{item.timeframes[currentMode].current}hrs</h2>
                <p className="">
                  Last {amountOfTime} - {item.timeframes[currentMode].previous}
                  hrs
                </p>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

export default App;
