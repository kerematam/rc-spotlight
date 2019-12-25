import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const Shadow = ({
  shadowZIndex,
  shadowOpacity,
  shadowColor,
  renderOnShadow
}) => (
  <div className={styles.shadow_container} style={{}}>
    <div
      className={styles.shadow_content}
      style={{
        ...(shadowZIndex && { "z-index": shadowZIndex })
      }}
    >
      {renderOnShadow && (
        <div className={styles.render_on_shadow}>{renderOnShadow}</div>
      )}
    </div>
    <div
      className={styles.shadow}
      style={{
        ...(shadowOpacity && {
          opacity: shadowOpacity
        }),
        ...(shadowColor && {
          "background-color": shadowColor
        })
      }}
    />
  </div>
);

Shadow.propTypes = {
  shadowZIndex: PropTypes.string,
  shadowOpacity: PropTypes.number,
  shadowColor: PropTypes.string,
  renderOnShadow: PropTypes.node
};

export default Shadow;
