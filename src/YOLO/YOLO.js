import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CreateYOLO = function() {
  let count = 0;
  const wakeArr = [];

  return ({ children }) => {
    const [shouldMount, setShouldMount] = useState(false);

    useEffect(() => {
      count++;
      if (count === 1) {
        setShouldMount(true);
      } else {
        wakeArr.push(setShouldMount);
      }

      return () => {
        count--;
        const index = wakeArr.indexOf(setShouldMount);
        if (index > -1) {
          wakeArr.splice(index, 1);
        }
        if (count > 0) {
          console.log("WAKE!");
          wakeArr[0](true);
        }
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
