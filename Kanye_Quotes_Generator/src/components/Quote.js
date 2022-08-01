import React from "react";
// import { BounceLoader } from "react-spinners";

const Quote = (props) => {
  // console.log("inside display:", props.quote);
  return (
    <>
      <h4>{props.prevQuotes[0]}</h4>
      <p>
        Previous{" "}
        {props.prevQuotes.length < 10 ? props.prevQuotes.length - 1 : 10} Quotes
      </p>
      {props.prevQuotes?.slice(1, 11).map((q) => (
        <h5>{q}</h5>
      ))}
    </>
  );
};

export default Quote;
