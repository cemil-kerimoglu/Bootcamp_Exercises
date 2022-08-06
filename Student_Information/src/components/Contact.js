import React from "react";
import { useParams } from "react-router-dom";

const Contact = ({ contactInfo }) => {
  const { studentId } = useParams();
      const contactOfInterest = contactInfo.find(
        (student) => student.login.uuid === studentId
      );
      console.log(contactOfInterest);
      const { name: {first}, name: {last}, cell, email, phone, picture: {large} } = contactOfInterest;

      return (
        <div>
          <h2>
            Contact Information of {first} {last}
          </h2>
          <img src={large} alt={`Picture of ${first} ${last}`} />
          <ul>
            <li>Phone: {phone} </li>
            <li>Mobile: {cell} </li>
            <li>Email: {email} </li>
          </ul>
        </div>
      );
}

export default Contact;
