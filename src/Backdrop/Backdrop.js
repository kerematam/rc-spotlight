import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const Backdrop = ({
  backdropZIndex,
  backdropOpacity,
  backdropColor,
  renderOnBackdrop
}) => (
  <div className={styles.backdrop_container} style={{}}>
    <div
      className={styles.backdrop_content}
      style={{
        ...(backdropZIndex && { "z-index": backdropZIndex })
      }}
    >
      {renderOnBackdrop && (
        <div className={styles.render_on_backdrop}>{renderOnBackdrop}</div>
      )}
    </div>
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
  </div>
);

Backdrop.propTypes = {
  backdropZIndex: PropTypes.string,
  backdropOpacity: PropTypes.number,
  backdropColor: PropTypes.string,
  renderOnBackdrop: PropTypes.node
};

export default Backdrop;
