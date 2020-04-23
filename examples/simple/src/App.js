import React, { useEffect, useState } from "react";
import Spotlight, { LabelWrapper } from "rc-spotlight";

import "./index.css";

const renderLabel = text => (
  <LabelWrapper center>
    <div className="backdrop-text">{text}</div>
  </LabelWrapper>
);

const App = () => {
  const [backdropIndex, setBackdropIndex] = useState(1);
  const [input, setInput] = useState();

  useEffect(() => {
    setInterval(function() {
      setBackdropIndex(backdropIndex =>
        backdropIndex === 4 ? 1 : backdropIndex + 1
      );
    }, 2000);
  }, []);

  return (
    <div className="container">
      <Spotlight
        isActive={1 === backdropIndex}
        renderLabel={renderLabel("This is title")}
      >
        <h1 className="header">Spotlight</h1>
      </Spotlight>
      <div>
        <Spotlight
          isActive={2 === backdropIndex}
          renderLabel={renderLabel("This is subtitle")}
          inheritParentBackgroundColor
        >
          <h2>You can NOT interact with DOMs under backdrop</h2>
        </Spotlight>
      </div>
      <Spotlight
        isActive={3 === backdropIndex}
        renderLabel={renderLabel("This is text input")}
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
