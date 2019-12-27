import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

YOLO.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default YOLO;
