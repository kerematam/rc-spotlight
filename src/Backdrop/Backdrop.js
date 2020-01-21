import React from "react";
import PropTypes from "prop-types";
import Portal from "../Portal";
import YOLO from "../YOLO";

import styles from "./styles.css";

const Backdrop = ({
  backdropZIndex,
  backdropOpacity,
  backdropColor,
  renderOnBackdrop
}) => (
  <Portal>
    <div className={styles.backdrop_container}>
      <div
        className={styles.backdrop_content}
        style={{
          ...(backdropZIndex && { zIndex: backdropZIndex })
        }}
      >
        {renderOnBackdrop && (
          <div className={styles.render_on_backdrop}>{renderOnBackdrop}</div>
        )}
      </div>
      <YOLO>
        <div
          className={styles.backdrop}
          style={{
            ...(backdropOpacity && {
              opacity: backdropOpacity
            }),
            ...(backdropColor && {
              "background-color": backdropColor
            })
          }}
        />
      </YOLO>
    </div>
  </Portal>
);

Backdrop.propTypes = {
  backdropZIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backdropOpacity: PropTypes.number,
  backdropColor: PropTypes.string,
  renderOnBackdrop: PropTypes.node
};

export default Backdrop;
