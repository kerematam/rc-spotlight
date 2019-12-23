import React, { useEffect, useState } from "react";
import LightboxWrapper from "react-lightbox-wrapper";

import "./index.css";

const ShadowText = text => <h1 className="shadow-text">{text}</h1>;

const App = () => {
  const [shadowIndex, setshadowIndex] = useState(0);
  useEffect(() => {
    setInterval(function() {
      setshadowIndex(shadowIndex =>
        shadowIndex === 4 ? 1 : shadowIndex + 1
      );
    }, 2000);
  }, []);

  return (
    <div>
      <LightboxWrapper
        isActive={1 === shadowIndex}
        renderOnShadow={ShadowText("This is title")}
      >
        <h1 className="header">Lightbox Wrapper</h1>
      </LightboxWrapper>
      <LightboxWrapper
        isActive={2 === shadowIndex}
        renderOnShadow={ShadowText("This is subtitle")}
      >
        <h2>You can NOT touch shadowed areas</h2>
        <h2>Sibling tag: You dont need to wrap it to one div</h2>
      </LightboxWrapper>
      <LightboxWrapper
        isActive={3 === shadowIndex}
        renderOnShadow={ShadowText("This is text input")}
      >
        <input size="large" placeholder="Type something" />
      </LightboxWrapper>
    </div>
  );
};

export default App;
