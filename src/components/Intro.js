import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

function Intro(props) {
  return (
    <div className="intro">
      {props.scrollRan === true ? (
        <h1 className="intro-typewriter" style={{ fontSize: "40px" }}>
          Hi, my name is Tushar
          <br />
          I'm a full stack developer
        </h1>
      ) : (
        <h1 className="intro-typewriter">
          <TypeWriterEffect
            textStyle={{
              fontSize: "40px",
            }}
            startDelay={1000}
            cursorColor="#979696"
            hideCursorAfterText={true}
            text="Hi, my name is Tushar"
            typeSpeed={100}
          />
          <TypeWriterEffect
            textStyle={{
              fontSize: "40px",
            }}
            startDelay={5000}
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
