import React from "react";

const Quote = (props) => {
  return (
    <>
      <h4>{props.kanyeQuotes[0]}</h4>
      <p>
        Previous{" "}
        {props.kanyeQuotes.length < 10 ? (props.kanyeQuotes.length - 1) : 10} Quotes
      </p>
      {props.kanyeQuotes?.slice(1, 11).map((q) => (<h5>{q}</h5>))}
    </>
  );
};

export default Quote;
