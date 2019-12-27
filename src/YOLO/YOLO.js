import React, { useEffect, useState } from "react";

const CreateYOLO = function() {
  let isShown = false;
  return ({ children }) => {
    const [shouldMount, setShouldMount] = useState(false);

    useEffect(() => {
      if (!isShown) {
        setShouldMount(true);
        isShown = true;
      }
    }, []);

    useEffect(() => () => {
      isShown = false;
    });

    return shouldMount && children;
  };
};

const YOLO = CreateYOLO();

export default YOLO;
