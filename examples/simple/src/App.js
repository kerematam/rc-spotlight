import React, { useEffect, useState } from "react";
import Spotlight, { LabelWrapper } from "rc-spotlight";
import arrow from "./assets/arrow.png";

import "./index.css";
import "./label-with-arrow.css";

const renderLabel = ({ text }) => (
  <LabelWrapper style={{ background: "white", padding: "5px", width: "100%" }}>
    <div>{text}</div>
  </LabelWrapper>
);

const renderLabelOnCenter = ({ text }) => (
  <LabelWrapper center>
    <div
      style={{
        background: "black",
        color: "white",
        padding: "10px",
        fontSize: "30px"
      }}
    >
      {text}
    </div>
  </LabelWrapper>
);

const renderLabelWithArrow = ({ title, body }) => (
  <LabelWrapper>
    <div className="label-container">
      <img className="arrow-image position" src={arrow} />
      <div className="label-text position">
        <div className="label-text title">{title}</div>
        <div className="label-text">{body}</div>
      </div>
    </div>
  </LabelWrapper>
);

const bodyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const App = () => {
  const [backdropIndex, setBackdropIndex] = useState(1);
  const [input, setInput] = useState();

  useEffect(() => {
    const interval = setInterval(function() {
      setBackdropIndex(backdropIndex =>
        backdropIndex === 4 ? 1 : backdropIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Spotlight
        isActive={1 === backdropIndex}
        renderLabel={renderLabelWithArrow({
          title: "This is title",
          body: bodyText
        })}
      >
        <h1 className="header">Spotlight</h1>
      </Spotlight>
      <Spotlight
        isActive={2 === backdropIndex}
        renderLabel={renderLabel({
          text: "This is subtitle",
          isCentered: false
        })}
        inheritParentBackgroundColor
      >
        <h3>You can NOT interact with DOMs under backdrop</h3>
      </Spotlight>
      <Spotlight
        isActive={3 === backdropIndex}
        renderLabel={renderLabelOnCenter({ text: "This is text input" })}
      >
        <input
          value={input}
          style={{ fontSize: "24px", width: "100%" }}
          size="large"
          placeholder="Type something"
          onChange={e => {
            setInput(e.target.value);
          }}
        />
      </Spotlight>
    </div>
  );
};

export default App;
