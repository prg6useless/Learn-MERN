import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const locations = [
    {
      country: "India",
      cities: ["Bangalore", "Goa"],
    },
    {
      country: "Nepal",
      cities: ["kathmandu", "Pokhara"],
    },
    {
      country: "USA",
      cities: ["California", "New York City"],
    },
  ];

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const getAllCountries = (locations) =>
    locations.map((location) => location.country);
  const getCities = (country) =>
    locations.find((location) => location.country === country).cities;

  return (
    <>
      <label>Select Country</label>
      <br />
      <SelectComp
        data={getAllCountries(locations)}
        label="country"
        setData={setCountry}
      />
      <br />
      <label>Select City</label>
      <br />
      {country && (
        <SelectComp data={getCities(country)} label="city" setData={setCity} />
      )}
    </>
  );
};

const SelectComp = ({ data, label = "", setData }) => {
  return (
    <>
      <select onChange={(e) => setData(e.target.value)}>
        <option>Select a {label}</option>
        {data.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
