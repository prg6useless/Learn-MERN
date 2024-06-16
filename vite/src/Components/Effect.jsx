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

import { useState } from "react";
import TableContent from "./TableContent";
import useDebounce from "../Hooks/useDebounce";
import useFetch from "../Hooks/useFetch";

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
//     const controller = new AbortController();
//     const fetchRecipe = async () => {
//       try {
//         const { data } = await instance.get("recipes/search", {
//           signal: controller.signal,
//         });
//         setData(data.recipes);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchRecipe();
//     return () => controller.abort();
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

// const Effect = () => {
//   // const [data, setData] = useState([]);

//   const [expiryTime, setExpiryTime] = useState("03 oct 2024 00:00:00");
//   const [countdownTime, setCountdownTime] = useState({
//     countdownDays: "",
//     countdownHours: "",
//     countdownlMinutes: "",
//     countdownSeconds: "",
//   });

//   const countdownTimer = () => {
//     const timeInterval = setInterval(() => {
//       const countdownDateTime = new Date(expiryTime).getTime();
//       const currentTime = new Date().getTime();
//       const remainingDayTime = countdownDateTime - currentTime;
//       const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
//       const totalHours = Math.floor(
//         (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const totalMinutes = Math.floor(
//         (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
//       );
//       const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

//       const runningCountdownTime = {
//         countdownDays: totalDays,
//         countdownHours: totalHours,
//         countdownMinutes: totalMinutes,
//         countdownSeconds: totalSeconds,
//       };

//       setCountdownTime(runningCountdownTime);
//       if (remainingDayTime < 0) {
//         clearInterval(timeInterval);
//         setExpiryTime(false);
//       }
//     }, 1000);
//   };

//   useEffect(() => {
//     countdownTimer();
//     return () => clearTimeout(countdownTimer);
//   });

//   // useEffect(() => {
//   //   const controller = new AbortController();

//   //   const fetchRecipe = async () => {
//   //     const { data } = await instance.get(
//   //       `recipes/search?q=${result}&limit=${limit}&skip=${skip}`,
//   //       { signal: controller.signal }
//   //     );
//   //     // add limit and skip as dropdown
//   //     console.log(data.recipes);
//   //     setData(data.recipes);
//   //   };
//   //   fetchRecipe();
//   //   return () => controller.abort(); // cleanup
//   // }, [result, skip, limit]);

//   return (
//     <>
//       <p>Days : {countdownTime.countdownDays}</p>
//       <p>
//         CountDown to Dashain : {countdownTime.countdownHours}:
//         {countdownTime.countdownMinutes}:{countdownTime.countdownSeconds}
//       </p>
//       <p>Dashain : {expiryTime}</p>
//       <input
//         placeholder="Search"
//         onChange={(e) => setSearch(e.target.value)}
//       ></input>
//       {/* {data.map((item) => {
//         return <p key={item.id}>{item.name}</p>;
//       })} */}

//       {/* <TableContent data={data}></TableContent> */}

//       <p>Skips</p>
//       <select id="skips" onChange={(e) => setSkip(e.target.value)}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//       </select>
//       <p>Limits</p>
//       <select
//         id="limits"
//         defaultValue={5}
//         onChange={(e) => setLimit(e.target.value)}
//       >
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//       </select>
//     </>
//   );
// };

// CLEANUP

// const Effect = () => {
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     const timer =
//       count === -1
//         ? setCount(0)
//         : setTimeout(() => {
//             setCount(count - 1);
//           }, 1000);
//     return () => clearTimeout(timer); // cleanup
//   });
//   return <>{count}</>;
// };

const Effect = () => {
  const [search, setSearch] = useState("");
  // const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const { result } = useDebounce({ searchTerm: search });
  const { loading, error, data } = useFetch({
    url: `recipes/search?q=${result}&limit=${limit}&skip=${skip}`,
  });
  return (
    <>
      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <br />
      {error && JSON.stringify(error)}
      {loading && data ? (
        <>Data Loading...</>
      ) : (
        <TableContent data={data.recipes} />
      )}
      <p>Skips</p>
      <select
        id="skips"
        defaultChecked={0}
        defaultValue={skip}
        onChange={(e) => setSkip(e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <p>Limits</p>
      <select
        id="limits"
        defaultChecked={5}
        defaultValue={limit}
        onChange={(e) => setLimit(e.target.value)}
      >
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
