import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import User from "./User";
// import users from "./users.json";
import Button from "./Button";

const App = () => {
  // console.log(users);
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState();
  const [number, setNumber] = useState(5);

  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(
        `https://randomuser.me/api?results=${number}&gender=${gender}`
      );
      // const data = await res.json();
      const { results } = await res.json();
      // setUsers(data.results);
      setUsers(results);
    };
    fetchingData();
  }, [number, gender]);
  console.log(users);
  // let gender;
  // const getGender = (gender) => {
  //   users.filter(user => user.gender === gender);
  //   console.log(users);
  // }
  // getGender('male');
  const handleChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html">instructions</a>
      </h1>
      <select onChange={handleChange}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
      </select>
      <button onClick={() => setGender("male")}> Get Males </button>
      <button onClick={() => setGender("female")}> Get Females </button>
      <button onClick={() => setGender("")}> Get Both </button>
      {users?.map((element) => {
        // console.log(element);
        return <User user={element} />;
      })}
    </div>
  );
};

export default App;
