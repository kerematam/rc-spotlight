import React, { useEffect, useState } from "react";
import Spotlight, { LabelWrapper } from "rc-spotlight";
import { Input, Tooltip } from "antd";
import { Typography } from "antd";

import "./index.css";

const { Title } = Typography;

const SpotlightWithTooltip = ({
  isActive,
  toolTipPlacement = "top",
  toolTipTitle = "Check here!",
  children,
  ...rest
}) => {
  return (
    <Tooltip
      placement={toolTipPlacement}
      visible={isActive}
      title={toolTipTitle}
    >
      <Spotlight isActive={isActive} {...rest}>
        {children}
      </Spotlight>
    </Tooltip>
  );
};

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
      <SpotlightWithTooltip
        isActive={1 === backdropIndex}
        inheritParentBackgroundColor
        toolTipPlacement="right"
        toolTipTitle={"You can use Antd Tooltip"}
        style={{
          width: "fit-content",
          boxShadow: "0 0 0 5px #ffffff"
        }}
      >
        <Title>Spotlight</Title>
      </SpotlightWithTooltip>
      <div>
        <SpotlightWithTooltip
          isActive={2 === backdropIndex}
          inheritParentBackgroundColor
          toolTipTitle={"Like this"}
        >
          <Title level={3}>You can NOT interact with DOMs under backdrop</Title>
        </SpotlightWithTooltip>
      </div>
      <SpotlightWithTooltip
        isActive={3 === backdropIndex}
        toolTipPlacement="bottom"
        toolTipTitle={"This is Ant Design Tooltip"}
      >
        <Input
          value={input}
          placeholder="Type something"
          onChange={e => {
            setInput(e.target.value);
          }}
        />
      </SpotlightWithTooltip>
    </div>
  );
};

export default App;
