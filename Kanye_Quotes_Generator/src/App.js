import React from "react";
import KanyeGif from "./KanyeGif";
import "./styles.css";
import Quote from "./components/Quote.js";
import Error from "./components/Error.js";
import { BounceLoader } from "react-spinners";

import { useState, useEffect } from "react";

const App = () => {
  const [prevQuotes, setPrevQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadQuote = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const quotes = await fetch("https://api.kanye.rest");
        let { quote } = await quotes.json();
        setLoading(false);
        setPrevQuotes((prev) => [quote, ...prev]);
      } catch (error) {
        console.log(
          "There was a problem loading a Kanye quote, please try again later"
        );
        setIsError(true);
        // alert(error.message);
      }
    };
    setInterval(() => loadQuote(), 5000);
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <KanyeGif />
      <h2>QUOTE</h2>
      {/* Your code here! */}
      <BounceLoader loading={loading} />
      {isError ? <Error /> : <Quote prevQuotes={prevQuotes} />}
    </div>
  );
};

export default App;
