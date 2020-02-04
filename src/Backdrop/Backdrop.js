import React from "react";
import PropTypes from "prop-types";
import Portal from "../Portal";
import YOLO from "../YOLO";

import styles from "./styles.css";

const Backdrop = ({
  zIndex,
  opacity,
  color,
}) => (
    <Portal>
      <YOLO>
        <div className={styles.backdrop_container}>
          <div
            className={styles.backdrop}
            style={{
              ...(opacity && { opacity }),
              ...(color && { "background-color": color }),
              ...(zIndex && { zIndex })
            }}
          />
        </div>
      </YOLO>
    </Portal>
  )

Backdrop.propTypes = {
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opacity: PropTypes.number,
  color: PropTypes.string,
};

export default Backdrop;
