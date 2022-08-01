import React from "react";
import Contact from "./Contact";

export default function User(props) {
  // console.log(props);
  // console.log(props.user)
  // console.log(props.user.picture.medium);
  // console.log(props.user.name.first);
  return (
    <div>
      <img src={props.user.picture.medium} alt={props.user.name.first} />
      <p>
        Name :{" "}
        {`${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`}{" "}
      </p>
      <p>Age : {props.user.dob.age} </p>
      <Contact contactInfo={props.user} />
    </div>
  );
}
