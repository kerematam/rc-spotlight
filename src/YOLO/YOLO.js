import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CreateYOLO = function() {
  let count = 0;

  return ({ children }) => {
    const [shouldMount, setShouldMount] = useState(false);

    useEffect(() => {
      count++;
      if (count === 1) {
        setShouldMount(true);
      }
      return () => {
        count--;
      };
    }, []);

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
