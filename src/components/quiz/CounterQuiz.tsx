import { useEffect, useState } from "react";

const CounterQuiz = () => {
  const [time, setTime] = useState<number>(100);
  const [timeString, setTimeString] = useState<any>();

  let hours = Math.floor(time / 3600); // get hours
  let minutes = Math.floor((time - hours * 3600) / 60); // get minutes
  let seconds = time - hours * 3600 - minutes * 60; //  get seconds

  function convTime(hours: any, minutes: any, seconds: any) {
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }

  useEffect(() => {
    let interval: any;

    if (time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    setTimeString(convTime(hours, minutes, seconds));

    return () => clearInterval(interval);
  }, [time, hours, seconds, minutes]);

  return (
    <h1>
      {/* {time} */}

      {timeString}
    </h1>
  );
};

export default CounterQuiz;
