import React, { useEffect, useState } from "react";
import Spotlight from "rc-spotlight";

import "./index.css";

const BackdropText = text => (
  <h1 style={{ fontFamily: "Ubuntu" }} className="backdrop-text">
    {text}
  </h1>
);

const App = () => {
  const [backdropIndex, setBackdropIndex] = useState(0);
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
        renderOnBackdrop={BackdropText("This is title")}
      >
        <h1 className="header">Spotlight</h1>
      </Spotlight>
      <div>
        <Spotlight
          isActive={2 === backdropIndex}
          renderOnBackdrop={BackdropText("This is subtitle")}
          inheritParentBackgroundColor
        >
          <h2>You can NOT interact with DOMs under backdrop</h2>
        </Spotlight>
      </div>
      <Spotlight
        isActive={3 === backdropIndex}
        renderOnBackdrop={BackdropText("This is text input")}
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
