import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [allMemes, setAllMemes] = useState([]);
  const [index, setIndex] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [{topButton, bottomButton}, setClicked] = useState({topButton: false, bottomButton: false});

  useEffect(() => {
    const fetchingData = async () => {
      const results = await fetch("https://api.imgflip.com/get_memes");
      const {
        data: { memes },
        success
      } = await results.json();
      console.log(memes);
      setAllMemes(memes);
    };
    fetchingData();
  }, []);
  console.log(allMemes);

  const handleClick = (event) => {
    event.preventDefault();
    const number = Math.floor(Math.random() * allMemes.length);
    setIndex(number);
    
  };
  console.log("length", allMemes.length);

  const handleTop = (event) => {
    setClicked((prev) => ( {topButton: false, ...prev} ) );
    console.log(event.target.value);
    setTopText({[event.target.name]: event.target.value});
    setClicked((prev) => ( {topButton: true, ...prev} ) );
  }

  const handleBottom = (event) => {
    setClicked((prev) => ( {bottomButton: false, ...prev} ) );
    console.log(event.target.value);
    setBottomText({[event.target.name]: event.target.value});
    setClicked((prev) => ( {bottomButton: true, ...prev} ) );
  }
  
  return (
    <div>
      <div className="App">
        {allMemes.length ? <img src={allMemes[index].url} /> : <h1>loading</h1>}
        {topButton && <h2 className='top'>{topText}</h2>}
        {bottomButton && <h2 className='bottom'>{bottomText}</h2>}
      </div>
      <button onClick={handleClick}>Get A Meme</button>

      <form className="meme-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          // value={topText}
        />
        <button onClick={handleTop}>Submit Top Text</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          // value={bottomText}
        />
        <button onClick={handleBottom}>Submit Bottom Text</button>
      </form>

    </div>
  );
}
