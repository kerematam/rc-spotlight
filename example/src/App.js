import React, { useEffect, useState } from "react";
import Spotlight from "rc-spotlight";
import Table from "./Table";

import { Popover } from "antd";

import "typeface-roboto";
import "./index.css";
import "./App.css";

const BackdropText = text => (
  <h1 style={{ fontFamily: "Ubuntu" }} className="backdrop-text">
    {text}
  </h1>
);

const App = () => {
  const [backdropIndex, setBackdropIndex] = useState(0);
  const [input, setInput] = useState();

  // useEffect(() => {
  //   setInterval(function() {
  //     setBackdropIndex(backdropIndex =>
  //       backdropIndex === 4 ? 1 : backdropIndex + 1
  //     );
  //   }, 2000);
  // }, []);

  return (
    <div className="container">
      <Spotlight
        isActive={1 === backdropIndex}
        renderOnBackdrop={BackdropText("This is title")}
      >
        <h1 className="header">Spotlight</h1>
      </Spotlight>
      <div>
        <Popover
          placement="topLeft"
          title={"text"}
          content={BackdropText("This is subtitle")}
          trigger="click"
        >
          <Spotlight
            isActive={2 === 2}
            renderOnBackdrop={BackdropText("This is subtitle")}
            inheritParentBackgroundColor
          >
            <h2>You can NOT interact with DOMs under backdrop</h2>
            <div>
              <Popover visible={true}>
                <span>1</span>
              </Popover>
            </div>
          </Spotlight>
        </Popover>
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
      <Table />
    </div>
  );
};

export default App;
