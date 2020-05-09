import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const LabelWrapper = ({
  children,
  style: styleProp,
  zIndex,
  center,
  className: classNameProp,
  ...rest
}) => {
  let className = center
    ? styles.backdrop_content_center
    : styles.backdrop_content;
  className += classNameProp ? ` ${classNameProp}` : "";
  const style = {
    ...(zIndex && { zIndex }),
    ...styleProp
  };

  return (
    <div className={className} {...rest}>
      <div style={style}>{children}</div>
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
