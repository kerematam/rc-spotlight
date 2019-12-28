import React, { useEffect, useState } from "react";
import Spotlight from "rc-spotlight";

import "./index.css";

const BackdropText = text => <h1 className="backdrop-text">{text}</h1>;

const App = () => {
  const [backdropIndex, setBackdropIndex] = useState(0);
  useEffect(() => {
    setInterval(function() {
      setBackdropIndex(backdropIndex => (backdropIndex === 4 ? 1 : backdropIndex + 1));
    }, 2000);
  }, []);

  return (
    <div>
      <Spotlight
        isActive={1 === backdropIndex}
        renderOnBackdrop={BackdropText("This is title")}
      >
        <h1 className="header">Lightbox Wrapper</h1>
      </Spotlight>
      <Spotlight
        isActive={1 === backdropIndex}
        renderOnBackdrop={BackdropText("This is 2nd title")}
      >
        <h1 className="header">Lightbox Wrapper</h1>
      </Spotlight>
      <Spotlight
        isActive={1 === backdropIndex}
        renderOnBackdrop={BackdropText("This is 3rd title")}
      >
        <h1 className="header">Lightbox Wrapper</h1>
      </Spotlight>
      <Spotlight
        isActive={2 === backdropIndex}
        renderOnBackdrop={BackdropText("This is subtitle")}
      >
        <h2>You can NOT touch backdroped areas</h2>
        <h2>Sibling tag: You dont need to wrap it to one div</h2>
      </Spotlight>
      <Spotlight
        isActive={3 === backdropIndex}
        renderOnBackdrop={BackdropText("This is text input")}
      >
        <input size="large" placeholder="Type something" />
      </Spotlight>
    </div>
  );
};

export default App;
