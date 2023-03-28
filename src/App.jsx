import { useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import data from "./data.json";

function App() {
  const [currentMode, setCurrentMode] = useState("daily");
  const [amountOfTime, setAmountOfTime] = useState("Day");
  const dailyBtnRef = useRef(null);
  const weeklyBtnRef = useRef(null);
  const monthlyBtnRef = useRef(null);

  const handleDailyBtn = () => {
    setCurrentMode("daily");
    setAmountOfTime("Day");
    dailyBtnRef.current.classList.add('text-white');
    weeklyBtnRef.current.classList.remove('text-white');
    monthlyBtnRef.current.classList.remove('text-white');
  };
  const handleWeeklyBtn = () => {
    setCurrentMode("weekly");
    setAmountOfTime("Week");
    weeklyBtnRef.current.classList.add('text-white');
    dailyBtnRef.current.classList.remove('text-white');
    monthlyBtnRef.current.classList.remove('text-white');
  };
  const handleMonthlyBtn = () => {
    setCurrentMode("monthly");
    setAmountOfTime("Month");
    monthlyBtnRef.current.classList.add('text-white');
    dailyBtnRef.current.classList.remove('text-white');
    weeklyBtnRef.current.classList.remove('text-white');
  };

  return (
    <div className="sm:flex sm:items-center sm:justify-center h-screen p-6">
      <section className="grid container gap-8  max-w-[70rem] h-auto w-full">
        <section className="profile bg-darkBlue w-full rounded-2xl">
          <div className="profile-container h-2/3 rounded-2xl p-8 flex flex-col gap-11">
            <img 
              className="h-24 w-24 border-white border-4 rounded-full"
              src="./assets/images/image-jeremy.png" 
              alt="image-jeremy" 
            
            />
            <div className="">
              <h3 className="text-[hsl(236,100%,87%)]">Report for</h3>
              <h1 className="text-4xl text-[40px] font-light">Jeremy Robson</h1>
            </div>
          </div>
          <div className="p-6 flex flex-col items-start justify-between h-1/3 text-lg text-[hsl(236,100%,87%)]">
            <button ref={dailyBtnRef} className={`text-white`} onClick={handleDailyBtn}>
              Daily
            </button>
            <button ref={weeklyBtnRef} className={``} onClick={handleWeeklyBtn}>
              Weekly
            </button>
            <button ref={monthlyBtnRef} className={``} onClick={handleMonthlyBtn}>
              Monthly
            </button>
          </div>
        </section>
        {data.map((item, i) => (
          <section className={`w-full item-${i} h-full grid grid-rows-[3rem_1fr] overflow-hidden rounded-2xl`} style={{backgroundColor: `${item.background_color}`}}>
            <div className="flex justify-end px-5">
              <img src={item.background} alt="" className="h-20 w-20" />
            </div>
            <div className="bg-darkBlue px-8 py-8 rounded-t-2xl flex flex-col flex-nowrap gap-3 ">
              <header className="flex justify-between text-lg">
                <h3 className="">{item.title}</h3>
                <div className="">***</div>
              </header>
              <div className="flex flex-col flex-nowrap items-start justify-between gap-[0px]">
                <h2 className="text-[56px] font-light">{item.timeframes[currentMode].current}hrs</h2>
                <p className="text-[hsl(236,100%,87%)]">
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
