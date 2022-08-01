import React from "react";

export default function Contact(props) {
  // console.log(props)
  console.log(props.contactInfo);
  return (
    <div>
      <p>
        Address:{" "}
        {`${props.contactInfo.location.street.name}
      ${props.contactInfo.location.street.number}
      ${props.contactInfo.location.postcode}
      ${props.contactInfo.location.city}
      ${props.contactInfo.location.state}
      ${props.contactInfo.location.country}`}{" "}
      </p>
      <p>Email: {props.contactInfo.email} </p>
      <p>Phone number: {props.contactInfo.phone} </p>
    </div>
  );
}
