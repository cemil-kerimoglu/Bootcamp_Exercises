import React from "react";
import { useParams } from "react-router-dom";

const Student = ({ studentInfo }) => {
  // we destructure the params memberName from the object return from the useParams hook
  const { studentId } = useParams();
  console.log(studentId);
  console.log(studentInfo);
  const studentOfInterest = studentInfo.find(
    (student) => student.login.uuid === studentId
  );
  console.log(studentOfInterest);
  const { name, gender, dob, location } = studentOfInterest;
  const { postcode, street, city, country } = location;
  return (
    <div>
      <h2>
        Information About {name.first} {name.last}
      </h2>
      <ul>
        <li>Gender: {gender}</li>
        <li>Date of Birth: {dob.date}</li>
        <li>
          Address: {street.name} {street.number} <br />
          {postcode} {city} {country}
        </li>
      </ul>
    </div>
  );
};

export default Student;
