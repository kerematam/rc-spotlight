import React from "react";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import Portal from "./Portal";
import YOLO from "./YOLO";

import styles from "./styles.css";

const Spotlight = ({
  isActive,
  backdropZIndex,
  backdropOpacity,
  backdropColor,
  children,
  renderOnBackdrop
}) => {
  const StyledChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        className: `${child.props.className} ${styles.component}`
      })
    );

  return isActive ? (
    <React.Fragment>
      <StyledChildren
        style={{
          ...(backdropZIndex && { "z-index": (+backdropZIndex + 1).toString() })
        }}
      />
      <YOLO>
        <Portal>
          <Backdrop
            backdropZIndex={backdropZIndex}
            backdropOpacity={backdropOpacity}
            backdropColor={backdropColor}
            renderOnBackdrop={renderOnBackdrop}
          />
        </Portal>
      </YOLO>
    </React.Fragment>
  ) : (
    children
  );
};

Spotlight.propTypes = {
  isActive: PropTypes.bool,
  backdropZIndex: PropTypes.string,
  backdropOpacity: PropTypes.string,
  backdropColor: PropTypes.string,
  renderOnBackdrop: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Spotlight;
