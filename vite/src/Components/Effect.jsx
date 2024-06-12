/*
1. 
Countdown
hw : dashain countdown

2. 
API data fetch
hw : API data response format (table)

3. 
API data search feaature add
hw : sorting
*/

import { useState, useEffect } from "react";
import instance from "../utils/axios";

// SCENARIO 1 :

// const Effect = () => {
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     count === -1
//       ? setCount(0)
//       : setTimeout(() => {
//           setCount(count - 1);
//         }, 1000);
//   });

//   return <>{count}</>;
// };

// SCENARIO 2 :

// const Effect = () => {
//   const [data, setData] = useState([]);
//   //   const { data } = await instance.get(url);
//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const { data } = await instance.get("recipes/search");
//         setData(data.recipes);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchRecipe();
//   }, []);
//   return (
//     <>
//       <br />
//       <h3>All Food Items</h3>
//       {data.map((item) => {
//         return <p key={item.id}>{item.name}</p>;
//       })}
//       {/* {JSON.stringify(data)} */}
//     </>
//   );
// };

// SCENARIO 3 :

const Effect = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);

  const [expiryTime, setExpiryTime] = useState("03 oct 2024 00:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await instance.get(
        `recipes/search?q=${search}&limit=${limit}&skip=${skip}`
      );
      // add limit and skip as dropdown
      console.log(data.recipes);
      setData(data.recipes);
    };
    fetchRecipe();
  }, [search, skip, limit]);
  return (
    <>
      <p>Days : {countdownTime.countdownDays}</p>
      <p>
        CountDown to Dashain : {countdownTime.countdownHours}:
        {countdownTime.countdownMinutes}:{countdownTime.countdownSeconds}
      </p>
      <p>Dashain : {expiryTime}</p>
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {data.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
      <p>Skips</p>
      <select id="skips" onChange={(e) => setSkip(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <p>Limits</p>
      <select id="limits" onChange={(e) => setLimit(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </>
  );
};

export default Effect;
