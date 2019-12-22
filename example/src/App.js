import React, { useEffect, useState } from "react";
import LightboxWrapper from "react-lightbox-wrapper";

import "./index.css";

const ShadowText = text => <h1 className="shadow-text">{text}</h1>;

const App = () => {
  const [hasShadowBitMap, setHasShadowBitMap] = useState(1);
  useEffect(() => {
    setInterval(function() {
      setHasShadowBitMap(hasShadowBitMap =>
        hasShadowBitMap === 8 ? 1 : hasShadowBitMap * 2
      );
    }, 5000);
  }, []);

  return (
    <div>
      <LightboxWrapper
        isActive={1 & hasShadowBitMap}
        renderOnShadow={ShadowText("This is title")}
      >
        <h1 className="header">Lightbox Wrapper</h1>
      </LightboxWrapper>
      <LightboxWrapper
        isActive={2 & hasShadowBitMap}
        renderOnShadow={ShadowText("This is subtitle")}
      >
        <h2>You can NOT touch shadowed areas</h2>
        <h2>Sibling tag: You dont need to wrap it to one div</h2>
      </LightboxWrapper>
      <LightboxWrapper
        isActive={4 & hasShadowBitMap}
        renderOnShadow={ShadowText("This is text input")}
      >
        <input size="large" placeholder="Type something" />
      </LightboxWrapper>
    </div>
  );
};

export default App;
