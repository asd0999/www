import React, { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";

function Intro(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }, []);

  const getSize = () => {
    if (windowWidth >= 1000) return "44px";
    if (windowWidth >= 600) return "42px";
    if (windowWidth >= 500) return "36px";
    if (windowWidth >= 400) return "32px";
    return "22px";
  };
  return (
    <div className="intro">
      {props.scrollRan === true ? (
        <h1 className="intro-typewriter" style={{ fontSize: getSize() }}>
          Hi, my name is Tushar
          <br />
          I'm a full stack developer
        </h1>
      ) : (
        <h1 className="intro-typewriter">
          <TypeWriterEffect
            textStyle={{
              fontSize: getSize(),
            }}
            startDelay={1000}
            cursorColor="#979696"
            hideCursorAfterText={true}
            text="Hi, my name is Tushar"
            typeSpeed={100}
          />
          <TypeWriterEffect
            textStyle={{
              fontSize: getSize(),
            }}
            startDelay={3600}
            cursorColor="#979696"
            hideCursorAfterText={true}
            text="I'm a full stack developer"
            typeSpeed={100}
          />
        </h1>
      )}
    </div>
  );
}

export default Intro;
