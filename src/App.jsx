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
    setAmountOfTime('Day');
  };
  const handleWeeklyBtn = () => {
    setCurrentMode("weekly");
    setAmountOfTime('Week');

  };
  const handleMonthlyBtn = () => {
    setCurrentMode("monthly");
    setAmountOfTime('Month');
  };

  return (
    <section className="">
      <section className="">
        <div className="">
          <img src="./assets/images/image-jeremy.png" alt="image-jeremy" />
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
        <section className="">
          <div className="">
            <img src={item.background} alt="" className="" />
          </div>
          <div className="">
            <header className="">
              <h3 className="">{item.title}</h3>
              <div className="">***</div>
            </header>
            <div className="">
              <h2 className="">
                {item.timeframes[currentMode].current}hrs
              </h2>
              <p className="">
                Last {amountOfTime} - {item.timeframes[currentMode].previous}hrs
              </p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default App;
