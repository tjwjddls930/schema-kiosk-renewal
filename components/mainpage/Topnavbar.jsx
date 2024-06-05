import React, { useState, useEffect } from "react";

const TopNavbar = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const [temperature, setTemperature] = useState(null);

  // useEffect for handling the <time>
  useEffect(() => {
    setCurrentDate(new Date());
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the time every 1 second (1000 ms)

    return () => clearInterval(timer); // Cleanup the timer
  }, []);

  // useEffect for handling the <temperature>
  useEffect(() => {
    // Function to fetch the temperature in Cheongju-si (충주시; 쉐마미술관 지역)
    const fetchTemperature = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Cheongju-si,kr&units=metric&APPID=3c2a20050841ca5399a1cd7cb0d0f3cf`
      )
        .then((response) => response.json())
        .then((data) => {
          setTemperature(Math.round(data.main.temp));
        })
        .catch((error) => console.error(error));
    };

    fetchTemperature(); // Fetch the temperature initially

    const temperatureTimer = setInterval(fetchTemperature, 3 * 60 * 60 * 1000); // Update the temperature every 3 hours

    return () => clearInterval(temperatureTimer); // Cleanup the timer
  }, []);

  if (!currentDate) return null; // Return null while currentDate is null to avoid rendering issues

  const optionsDate = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    timeZone: "Asia/Seoul",
  };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Seoul",
  };

  const formattedDate = new Intl.DateTimeFormat("ko-KR", optionsDate).format(
    currentDate
  );
  const formattedTimeRaw = new Intl.DateTimeFormat("en-US", optionsTime).format(
    currentDate
  );
  let parts = formattedTimeRaw.split(" "); // split the time and AM/PM
  const formattedTime = `${parts[1]} ${parts[0]}`; // rearrange the order

  return (
    <div className="flex fixed top-3 screen-w:top-6 h-16 screen-w:h-20 w-full z-100 justify-center lg:justify-between items-center px-4 screen-w:px-12 screen-w:py-24">
      <img 
        src="/img/mainpage/schema-logo-NEW.svg"
        alt="logo1"
        className="hidden lg:block screen-w:block h-12 w-[150px] screen-w:h-32 screen-w:w-[450px]"
      />
        <img 
        src="/img/mainpage/schema-logo.png"
        alt="logo2"
        className="h-8 w-[100px] lg:h-12 lg:w-[150px] screen-w:h-32 screen-w:w-[450px]"
      />
      <div className="hidden lg:flex flex-row space-x-2 screen-w:space-x-4 text-Ablack mr-4">
          <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-xs lg:text-sm screen-w:text-3xl">{formattedDate}</span>
              <span className="font-bold text-xs lg:text-xl screen-w:text-6xl">{formattedTime}</span>
          </div>
          <span className="rounded-lg shadow-md px-2 py-2 lg:px-4 lg:py-4 text-sm lg:text-lg screen-w:px-6 screen-w:py-6 screen-w:text-5xl font-bold">{temperature ? `${temperature}°` : "24°"}</span>
      </div>
    </div>
  );
};

export default TopNavbar;