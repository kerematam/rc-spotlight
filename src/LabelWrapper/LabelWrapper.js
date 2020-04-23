import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const LabelWrapper = ({ children, style: styleProp, zIndex, center }) => {
  const className = center
    ? styles.backdrop_content_center
    : styles.backdrop_content;
  const style = {
    ...(zIndex && { zIndex }),
    ...styleProp
  };

  return (
    <div className={className}>
      <div style={style}>
        {children}
      </div>
    </div>
  );
};

export default LabelWrapper;

LabelWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  centerLabel: PropTypes.bool
};
