import React from "react";
import { useState, useEffect } from "react";

const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const { results } = await res.json();
      console.log(results);
      setStudents(results);
    };
    fetchStudents();
  }, []);
  return students;
};

export default useStudents;


/*
https://randomuser.me/api/?results=10

try {
  await axios
    .get("https://randomuser.me/api/?results=10")
    .then((result) => setStudents(result.data.results));
} catch (e) {
  console.log(e.message);
}
*/
